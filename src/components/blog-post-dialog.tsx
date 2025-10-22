"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { BlogPostForm } from "./postBlog"
import { Send } from "lucide-react"

export function PostBlogButton() {
  const [open, setOpen] = useState(false)

  const handleSuccess = () => {
    setOpen(false)
  }

  return (
    <>
      <Button className="hidden lg:flex" onClick={() => setOpen(true)} size="lg">
        Post a Blog
        <Send className="ml-2" />
      </Button>

      <Button className="flex lg:hidden" onClick={() => setOpen(true)} size="sm">
        Post a Blog
        <Send />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
            <DialogDescription>Fill in the details below to create and publish your blog post</DialogDescription>
          </DialogHeader>
          <BlogPostForm onSuccess={handleSuccess} />
        </DialogContent>
      </Dialog>
    </>
  )
}
