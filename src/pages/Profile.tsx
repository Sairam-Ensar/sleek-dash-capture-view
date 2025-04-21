
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Pen } from "lucide-react";

const DEFAULT_PROFILE_IMAGE = "/lovable-uploads/602f4d60-71af-476c-b318-9b981387be9e.png";

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

  const handleEditPhoto = () => {
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
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save profile logic here (API request)
    // Show success toast
    window?.toast?.("Profile saved!", { type: "success" });
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] px-4 py-8 flex flex-col">
      <h1 className="text-2xl font-bold text-[#222741] mb-10 px-2">My Profile</h1>
      <div className="flex justify-center items-start gap-8 flex-col xl:flex-row">
        {/* Profile Card */}
        <Card className="w-full max-w-xs mx-auto bg-white/90 rounded-2xl shadow-xl px-6 py-10 flex flex-col items-center">
          <div className="relative mb-6 group">
            <img
              src={profileImg}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl"
              style={{ background: "linear-gradient(135deg, #9b87f5 20%, #33C3F0 80%)" }}
            />
            <button
              type="button"
              className="absolute bottom-3 right-6 bg-[#1EAEDB] hover:bg-[#9b87f5] border-4 border-white rounded-full p-2 shadow transition-all"
              onClick={handleEditPhoto}
              title="Edit Photo"
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
          <Button
            className="w-full font-bold text-lg py-2 mt-2 rounded-full btn-primary-gradient btn-animated shadow"
            type="button"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Card>
        {/* Profile Form */}
        <form
          onSubmit={handleSubmit}
          className="grid flex-1 grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl px-6 py-10"
          autoComplete="off"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name" className="text-gray-700 mb-1">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-white border-2 border-gray-200 focus:border-[#9b87f5] font-medium"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-gray-700 mb-1">Email Address</Label>
            <Input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-white border-2 border-gray-200 focus:border-[#1EAEDB] font-medium"
              type="email"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phone" className="text-gray-700 mb-1">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="bg-white border-2 border-gray-200 focus:border-[#33C3F0]"
              type="tel"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="country" className="text-gray-700 mb-1">Country</Label>
            <Input
              id="country"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="bg-white border-2 border-gray-200 focus:border-[#33C3F0]"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="state" className="text-gray-700 mb-1">State/Region</Label>
            <Input
              id="state"
              name="state"
              value={form.state}
              onChange={handleChange}
              className="bg-white border-2 border-gray-200 focus:border-[#7E69AB]"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="city" className="text-gray-700 mb-1">City</Label>
            <Input
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="bg-white border-2 border-gray-200 focus:border-[#7E69AB]"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <Label htmlFor="address" className="text-gray-700 mb-1">Address</Label>
            <Input
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="bg-white border-2 border-gray-200 focus:border-[#1EAEDB]"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="zip" className="text-gray-700 mb-1">ZIP code</Label>
            <Input
              id="zip"
              name="zip"
              value={form.zip}
              onChange={handleChange}
              className="bg-white border-2 border-gray-200 focus:border-[#9b87f5]"
              autoComplete="off"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
