import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Pen } from "lucide-react";
import { toast } from "sonner";
import { EditableSection } from "@/components/ui/editable-section";
import { PageHeader } from "@/components/ui/page-header";

const DEFAULT_PROFILE_IMAGE = "/lovable-uploads/602f4d60-71af-476c-b318-9b981387be9e.png";

const cardBg = "bg-white/70 backdrop-blur-xl border border-blue-200 shadow-2xl";
const profileImgBg = "bg-gradient-to-br from-[#9b87f5] to-[#33C3F0]";

const editBtnStyles = "rounded-full px-6 py-2 font-bold text-white shadow-lg bg-gradient-to-r from-primary to-blue-700 btn-animated";
const cancelBtnStyles = "rounded-full px-6 py-2 font-bold bg-white text-primary border-2 border-primary/30 shadow";
const saveBtnStyles = "rounded-full px-6 py-2 font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 btn-animated shadow-xl";

export default function Profile() {
  const [profileImg, setProfileImg] = useState(DEFAULT_PROFILE_IMAGE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "nikhil",
    email: "nikhils@gmail.com",
    phone: "9898898787",
    country: "India",
    state: "Andhra Pradesh",
    city: "nellore",
    address: "nellore",
    zip: "54444",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditPhoto = () => {
    if (!isEditing) return;
    fileInputRef.current?.click();
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) setProfileImg(event.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!isEditing) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setProfileImg(DEFAULT_PROFILE_IMAGE);
    setForm({
      name: "nikhil",
      email: "nikhils@gmail.com",
      phone: "9898898787",
      country: "India",
      state: "Andhra Pradesh",
      city: "nellore",
      address: "nellore",
      zip: "54444",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    toast.success("Profile saved!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 py-8 flex flex-col">
      <PageHeader 
        title="My Profile" 
        description="View and edit your personal information"
        showBackButton
      />
      
      <div className="flex justify-center items-start gap-8 flex-col xl:flex-row">
        <Card className={`w-full max-w-xs mx-auto rounded-3xl p-0 shadow-2xl ${cardBg}`}>
          <div className="flex flex-col items-center">
            <div className="relative mt-8 mb-4 group">
              <div className={`absolute z-0 top-0 left-0 h-44 w-44 rounded-full ${profileImgBg} blur-xl opacity-60`} />
              <img
                src={profileImg}
                alt="Profile"
                className="w-40 h-40 relative object-cover rounded-full border-4 border-white shadow-xl ring-4 ring-blue-200 transition-all"
                style={{ background: "linear-gradient(135deg, #9b87f5 20%, #33C3F0 80%)" }}
              />
              <button
                type="button"
                className={`absolute bottom-3 right-6 bg-gradient-to-tr from-primary via-blue-600 to-blue-400 border-4 border-white rounded-full p-3 shadow transition-all ${isEditing ? "cursor-pointer opacity-100 hover:scale-105" : "opacity-40 cursor-not-allowed"}`}
                onClick={handleEditPhoto}
                title="Edit Photo"
                disabled={!isEditing}
              >
                <Pen className="w-6 h-6 text-white" />
              </button>
              <input
                ref={fileInputRef}
                className="hidden"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </div>
            <div className="w-full px-4 pb-8 text-center">
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">{form.name}</h2>
              <p className="text-gray-500 mb-3">{form.email}</p>
              {!isEditing ? (
                <Button
                  className={editBtnStyles + " w-full mt-1"}
                  type="button"
                  onClick={handleEdit}
                >
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-3 w-full mt-1">
                  <Button
                    className={cancelBtnStyles + " flex-1"}
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    className={saveBtnStyles + " flex-1"}
                    type="button"
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
        
        <form
          onSubmit={handleSubmit}
          className={`flex-1 w-full max-w-3xl mx-auto ${cardBg} rounded-3xl shadow-2xl px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative`}
          autoComplete="off"
        >
          <div className="absolute inset-0 pointer-events-none z-0 rounded-3xl" style={{background: "linear-gradient(120deg,rgba(155,135,245,0.03) 8%,rgba(51,195,240,0.04) 92%)"}} />
          <div className="relative z-10 flex flex-col gap-1.5">
            <Label htmlFor="name" className="text-gray-700 mb-1 font-semibold">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`bg-white/70 border-2 border-gray-200 focus:border-[#9b87f5] font-medium rounded-xl px-4 py-2 text-lg shadow`}
              autoComplete="off"
              required
              disabled={!isEditing}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-gray-700 mb-1 font-semibold">Email Address</Label>
            <Input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-white/70 border-2 border-gray-200 focus:border-[#1EAEDB] font-medium rounded-xl px-4 py-2 text-lg shadow"
              type="email"
              autoComplete="off"
              required
              disabled={!isEditing}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-1.5">
            <Label htmlFor="phone" className="text-gray-700 mb-1 font-semibold">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="bg-white/70 border-2 border-gray-200 focus:border-[#33C3F0] rounded-xl px-4 py-2 text-lg shadow"
              type="tel"
              autoComplete="off"
              required
              disabled={!isEditing}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-1.5">
            <Label htmlFor="country" className="text-gray-700 mb-1 font-semibold">Country</Label>
            <Input
              id="country"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="bg-white/70 border-2 border-gray-200 focus:border-[#33C3F0] rounded-xl px-4 py-2 text-lg shadow"
              autoComplete="off"
              required
              disabled={!isEditing}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-1.5">
            <Label htmlFor="state" className="text-gray-700 mb-1 font-semibold">State/Region</Label>
            <Input
              id="state"
              name="state"
              value={form.state}
              onChange={handleChange}
              className="bg-white/70 border-2 border-gray-200 focus:border-[#7E69AB] rounded-xl px-4 py-2 text-lg shadow"
              autoComplete="off"
              required
              disabled={!isEditing}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-1.5">
            <Label htmlFor="city" className="text-gray-700 mb-1 font-semibold">City</Label>
            <Input
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="bg-white/70 border-2 border-gray-200 focus:border-[#7E69AB] rounded-xl px-4 py-2 text-lg shadow"
              autoComplete="off"
              required
              disabled={!isEditing}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-1.5 md:col-span-2">
            <Label htmlFor="address" className="text-gray-700 mb-1 font-semibold">Address</Label>
            <Input
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="bg-white/70 border-2 border-gray-200 focus:border-[#1EAEDB] rounded-xl px-4 py-2 text-lg shadow"
              autoComplete="off"
              required
              disabled={!isEditing}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-1.5">
            <Label htmlFor="zip" className="text-gray-700 mb-1 font-semibold">ZIP code</Label>
            <Input
              id="zip"
              name="zip"
              value={form.zip}
              onChange={handleChange}
              className="bg-white/70 border-2 border-gray-200 focus:border-[#9b87f5] rounded-xl px-4 py-2 text-lg shadow"
              autoComplete="off"
              required
              disabled={!isEditing}
            />
          </div>
          {isEditing && (
            <div className="md:hidden mt-8 col-span-2 flex gap-4">
              <Button className={cancelBtnStyles + " flex-1"} type="button" onClick={handleCancel}>
                Cancel
              </Button>
              <Button className={saveBtnStyles + " flex-1"} type="button" onClick={handleSubmit}>
                Save
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
