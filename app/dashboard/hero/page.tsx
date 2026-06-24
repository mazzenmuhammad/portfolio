"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { api } from "@/convex/_generated/api";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageUpload } from "@/components/ui/image-upload";
import { useQuery, useMutation, useAction } from "convex/react";
import { Loader2, Save, Plus, Trash2 } from "lucide-react";

export default function HeroPage() {
  const heroContent = useQuery(api.hero.getHeroContent);
  const updateHeroText = useMutation(api.hero.updateHeroText);
  const updateHeroImage = useMutation(api.hero.updateHeroImage);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const saveImage = useAction(api.files.saveImage);

  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    mainHeading: "",
    highlightedText: "",
    description: "",
    achievements: [] as string[],
  });

  useEffect(() => {
    if (heroContent) {
      setFormData({
        mainHeading: heroContent.mainHeading,
        highlightedText: heroContent.highlightedText,
        description: heroContent.description,
        achievements: heroContent.achievements,
      });
    }
  }, [heroContent]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAchievementChange = (index: number, value: string) => {
    setFormData((prev) => {
      const achievements = [...prev.achievements];
      achievements[index] = value;
      return { ...prev, achievements };
    });
  };

  const addAchievement = () => {
    setFormData((prev) => ({
      ...prev,
      achievements: [...prev.achievements, ""],
    }));
  };

  const removeAchievement = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await updateHeroText({
        mainHeading: formData.mainHeading,
        highlightedText: formData.highlightedText,
        description: formData.description,
        achievements: formData.achievements.filter((a) => a.trim() !== ""),
      });

      toast.success("Hero section updated", {
        description: "Your changes have been saved",
      });
    } catch (error) {
      console.error("Error updating hero section:", error);
      toast.error("Error updating hero section", {
        description: "Please try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    try {
      setSelectedFile(file);
      return URL.createObjectURL(file);
    } catch (error) {
      console.error("Error handling image:", error);
      toast.error("Error handling image", {
        description: "Please try again",
      });
      throw error;
    }
  };

  const handleImageSave = async () => {
    if (!selectedFile) return;

    try {
      setIsImageLoading(true);

      const uploadUrl = await generateUploadUrl();

      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": selectedFile.type },
        body: selectedFile,
      });

      if (!result.ok) {
        throw new Error("Failed to upload image");
      }

      const { storageId } = await result.json();

      const { url } = await saveImage({
        storageId,
        destination: "hero",
      });

      await updateHeroImage({ imageUrl: url });

      setSelectedFile(null);

      toast.success("Hero image updated", {
        description: "Your new image has been saved",
      });
    } catch (error) {
      console.error("Error saving image:", error);
      toast.error("Error saving image", {
        description: "Please try again",
      });
    } finally {
      setIsImageLoading(false);
    }
  };

  return (
    <div className="space-y-6 w-full bg-card p-6">
      <Card className="border-l-0 border-b-0 border-r-0 shadow-none">
        <CardHeader>
          {heroContent === undefined ? (
            <>
              <Skeleton className="h-7 w-64 mb-2" />
              <Skeleton className="h-5 w-full max-w-md" />
            </>
          ) : (
            <>
              <CardTitle>Hero Section Management</CardTitle>
              <CardDescription>
                Update the main heading, description, and achievements shown
                in your homepage hero section.
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {heroContent === undefined ? (
              <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mainHeading">Main Heading</Label>
                  <Input
                    id="mainHeading"
                    name="mainHeading"
                    value={formData.mainHeading}
                    onChange={handleChange}
                    placeholder="Enter main heading"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="highlightedText">Highlighted Text</Label>
                  <Input
                    id="highlightedText"
                    name="highlightedText"
                    value={formData.highlightedText}
                    onChange={handleChange}
                    placeholder="Word(s) within the heading to highlight"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter description"
                    rows={3}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Achievements</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addAchievement}
                    >
                      <Plus className="h-4 w-4" />
                      Add
                    </Button>
                  </div>
                  {formData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        value={achievement}
                        onChange={(e) =>
                          handleAchievementChange(index, e.target.value)
                        }
                        placeholder="Enter achievement"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeAchievement(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <CardFooter className="px-0 pt-2">
              {heroContent === undefined ? (
                <Skeleton className="h-10 w-32 ml-auto" />
              ) : (
                <Button type="submit" disabled={isLoading} className="ml-auto">
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              )}
            </CardFooter>
          </form>
        </CardContent>
      </Card>

      <Card className="border-l-0 border-b-0 border-r-0 shadow-none">
        <CardHeader>
          <CardTitle>Hero Image</CardTitle>
          <CardDescription>
            Update the image shown in the hero section.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {heroContent === undefined ? (
            <Skeleton className="h-40 w-full" />
          ) : (
            <>
              <ImageUpload
                value={heroContent.imageUrl}
                onChange={() => {}}
                onUpload={handleImageUpload}
                disabled={isImageLoading}
              />
              {selectedFile && (
                <Button onClick={handleImageSave} disabled={isImageLoading}>
                  {isImageLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Image
                    </>
                  )}
                </Button>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}