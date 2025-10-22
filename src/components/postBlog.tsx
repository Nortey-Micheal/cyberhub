"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useSelector } from "react-redux"
import { StoreState } from "@/lib/store"

interface BlogFormData {
  title: string
  slug: string
  content: string
  author: string
  tags: string[]
  image: string
  published: boolean
}

interface FormErrors {
  [key: string]: string
}

interface BlogPostFormProps {
  onSuccess?: () => void
}

export function BlogPostForm({ onSuccess }: BlogPostFormProps) {
  const user = useSelector((state: StoreState) => state.user);
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    slug: "",
    content: "",
    author: user?._id || "",
    tags: [],
    image: "",
    published: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [tagInput, setTagInput] = useState("")

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }))
    if (errors.title) {
      setErrors((prev) => ({ ...prev, title: "" }))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }))
      setTagInput("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }
    if (!formData.content.trim()) {
      newErrors.content = "Content is required"
    }
    if (!formData.author.trim()) {
      newErrors.author = "Author is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccess(false)

    if (!validateForm()) {
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/blogs/createBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to create blog post")
      }

      setSuccess(true)
      setFormData({
        title: "",
        slug: "",
        content: "",
        author: user?._id || "",
        tags: [],
        image: "",
        published: false,
      })

      setTimeout(() => {
        setSuccess(false)
        onSuccess?.()
      }, 1500)
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : "An error occurred",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <CardContent className="pt-6">
      {success && (
        <Alert className="mb-6 border-green-200 bg-green-50">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">Blog post created successfully!</AlertDescription>
        </Alert>
      )}

      {errors.submit && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errors.submit}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">
            Title <span className="text-destructive">*</span>
          </Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter blog post title"
            value={formData.title}
            onChange={handleTitleChange}
            className={errors.title ? "border-destructive" : ""}
          />
          {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
        </div>

        {/* Slug */}
        <div className="space-y-2">
          <Label htmlFor="slug">Slug (auto-generated)</Label>
          <Input
            id="slug"
            name="slug"
            placeholder="auto-generated-slug"
            value={formData.slug}
            readOnly
            className="bg-muted"
            disabled
          />
        </div>

        {/* Author */}
        <div className="space-y-2">
          <Label htmlFor="author">
            Author <span className="text-destructive">*</span>
          </Label>
          <Input
            id="author"
            name="author"
            placeholder="Enter author name"
            value={user?._id || formData.author}
            onChange={handleInputChange}
            className={errors.author ? "border-destructive" : ""}
            disabled={!!user?._id}
          />
          {errors.author && <p className="text-sm text-destructive">{errors.author}</p>}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <Label htmlFor="content">
            Content <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="content"
            name="content"
            placeholder="Write your blog post content here..."
            value={formData.content}
            onChange={handleInputChange}
            rows={8}
            className={errors.content ? "border-destructive" : ""}
          />
          {errors.content && <p className="text-sm text-destructive">{errors.content}</p>}
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <Label htmlFor="image">Featured Image</Label>
          <div className="flex items-center gap-4">
            <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="flex-1" />
          </div>
          {formData.image && (
            <div className="mt-4 relative w-full h-48 bg-muted rounded-lg overflow-hidden">
              <img src={formData.image || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <Label htmlFor="tags">Tags</Label>
          <div className="flex gap-2">
            <Input
              id="tags"
              placeholder="Add a tag and press Add"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  handleAddTag()
                }
              }}
            />
            <Button type="button" variant="outline" onClick={handleAddTag}>
              Add
            </Button>
          </div>
          {formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {formData.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button type="button" onClick={() => handleRemoveTag(tag)} className="hover:opacity-70">
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Published Toggle */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="published"
            checked={formData.published}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                published: e.target.checked,
              }))
            }
            className="w-4 h-4 rounded border-border"
          />
          <Label htmlFor="published" className="cursor-pointer">
            Publish immediately
          </Label>
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Blog Post"
          )}
        </Button>
      </form>
    </CardContent>
  )
}
