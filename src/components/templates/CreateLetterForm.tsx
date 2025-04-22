
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PremiumButton } from "@/components/ui/premium-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const letterSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  recipient: z.string().min(1, "Recipient is required"),
  sender: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  content: z.string().min(20, "Content must be at least 20 characters long"),
  format: z.string().optional(),
  salutation: z.string().optional(),
  closing: z.string().optional(),
});

type LetterFormData = z.infer<typeof letterSchema>;

interface LetterFormProps {
  type: string;
}

const letterTemplates = {
  offer: {
    subject: "Job Offer: [Position] at Ensar HR",
    content: `Dear [Candidate Name],

We are pleased to offer you the position of [Position Title] at Ensar HR. This letter confirms our offer with the following details:

• Start Date: [Start Date]
• Salary: [Salary Amount]
• Benefits: Health insurance, dental coverage, 401(k) with company match
• Paid Time Off: 20 days per year
• Position Type: Full-time

Please review the attached employment agreement, which contains additional details about your position, responsibilities, and company policies.

To accept this offer, please sign and return this letter by [Response Deadline].

We look forward to welcoming you to the team!

Sincerely,
[Your Name]
[Your Title]
Ensar HR`,
    salutation: "Dear",
    closing: "Sincerely,"
  },
  acceptance: {
    subject: "Acceptance of Job Offer for [Position]",
    content: `Dear [Hiring Manager Name],

I am writing to formally accept your offer for the position of [Position Title] at Ensar HR. I am excited about the opportunity to join your team and contribute to the company's success.

As discussed, I will begin employment on [Start Date]. I understand that my starting salary will be [Salary Amount], and I will receive the benefits package as outlined in the offer letter.

Thank you for this opportunity. I look forward to starting my new role and meeting the team.

Sincerely,
[Your Name]
[Your Contact Information]`,
    salutation: "Dear",
    closing: "Sincerely,"
  },
  declination: {
    subject: "Regarding the Job Offer for [Position]",
    content: `Dear [Hiring Manager Name],

Thank you for offering me the position of [Position Title] at Ensar HR. After careful consideration, I have decided to decline this opportunity.

This was not an easy decision, as I appreciate the time you spent discussing the role with me and considering my application. I was impressed by your company's mission and the team I had the pleasure to meet.

I have decided to accept a position elsewhere that aligns more closely with my career goals at this time. I wish you and Ensar HR continued success and would welcome the chance to collaborate in the future.

Thank you again for your consideration and for the opportunity.

Best regards,
[Your Name]
[Your Contact Information]`,
    salutation: "Dear",
    closing: "Best regards,"
  },
  followup: {
    subject: "Thank You - Interview for [Position]",
    content: `Dear [Interviewer's Name],

Thank you for taking the time to meet with me on [Interview Date] to discuss the [Position Title] role at Ensar HR. I appreciated the opportunity to learn more about the position and your company.

Our conversation about [specific topic discussed] was particularly interesting, and I am excited about the possibility of bringing my expertise in [relevant skill or experience] to your team.

Please let me know if you need any additional information from me. I look forward to hearing from you about the next steps in the process.

Thank you again for your time and consideration.

Best regards,
[Your Name]
[Your Contact Information]`,
    salutation: "Dear",
    closing: "Best regards,"
  },
  recommendation: {
    subject: "Letter of Recommendation for [Candidate Name]",
    content: `Dear Hiring Manager,

I am writing to recommend [Candidate Name] for the position of [Position] at your company. I have known [Candidate Name] for [duration] in my capacity as [your relationship, e.g., manager, colleague, etc.].

During our time working together at [Company Name], [Candidate Name] consistently demonstrated [key positive traits] and excelled in [specific achievements or responsibilities].

[Provide specific examples of the candidate's work, achievements, or character traits that make them suited for the position]

[Candidate Name] would be an excellent addition to your team. Their skills in [relevant skills] combined with their [positive character traits] would make them a valuable asset to any organization.

Please feel free to contact me if you would like further information.

Sincerely,
[Your Name]
[Your Title]
[Your Contact Information]`,
    salutation: "Dear",
    closing: "Sincerely,"
  },
  business: {
    subject: "[Purpose of Letter]",
    content: `[Recipient's Name/Department]
[Company Name]
[Street Address]
[City, State ZIP]

Dear [Recipient's Name],

I am writing regarding [state the purpose of your letter concisely].

[Include relevant details, facts, and supporting information in this paragraph. Be clear and specific about your request, complaint, or information.]

[In this paragraph, you may want to suggest a resolution or action that you would like taken. Be reasonable and specific about what you expect.]

Thank you for your attention to this matter. I look forward to your response by [date if applicable].

Sincerely,
[Your Name]
[Your Title]
[Company Name]
[Contact Information]`,
    salutation: "Dear",
    closing: "Sincerely,"
  },
  formal: {
    subject: "[Subject of Letter]",
    content: `[Sender's Address]
[City, State ZIP]
[Date]

[Recipient's Name]
[Title]
[Company]
[Street Address]
[City, State ZIP]

Dear [Recipient's Name]:

I am writing to [state the purpose of your letter].

[The body of your letter should contain detailed information about your purpose. Use clear, concise language and maintain a professional tone throughout.]

[You may use another paragraph to provide additional information or context if necessary.]

[In your closing paragraph, summarize your purpose and indicate any action you expect or will take.]

Thank you for your attention to this matter.

Sincerely,

[Your handwritten signature]

[Your typed name]
[Your title]
[Your contact information]`,
    salutation: "Dear",
    closing: "Sincerely,"
  },
  cover: {
    subject: "Application for [Position]",
    content: `Dear Hiring Manager,

I am writing to express my interest in the [Position Title] position at [Company Name], as advertised on [where you saw the job posting]. With my background in [relevant field] and skills in [specific skills relevant to the job], I believe I would be a valuable addition to your team.

Over the past [number] years, I have developed expertise in [areas of expertise relevant to the position]. In my current role at [Current Company], I have [describe major achievements or responsibilities that relate to the job you're applying for].

[Company Name] stands out to me because of [something specific about the company or position that interests you]. I am particularly excited about the opportunity to [something specific about the role].

I have attached my resume, which provides additional details about my experience and qualifications. I would welcome the opportunity to discuss how my background and skills would benefit [Company Name].

Thank you for considering my application. I look forward to the possibility of speaking with you further about this opportunity.

Sincerely,
[Your Name]
[Your Contact Information]`,
    salutation: "Dear",
    closing: "Sincerely,"
  }
};

export const CreateLetterForm = ({ type }: LetterFormProps) => {
  const [loading, setLoading] = useState(false);
  const template = letterTemplates[type as keyof typeof letterTemplates] || {};
  
  const { register, handleSubmit, formState: { errors } } = useForm<LetterFormData>({
    resolver: zodResolver(letterSchema),
    defaultValues: {
      title: "",
      recipient: "",
      sender: "",
      subject: template.subject || "",
      content: template.content || "",
      salutation: template.salutation || "Dear",
      closing: template.closing || "Sincerely,"
    }
  });

  const onSubmit = (data: LetterFormData) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form data:", data);
      setLoading(false);
      toast.success(`${data.title} template created successfully!`, {
        description: "Your template has been saved and is ready to use"
      });
    }, 1500);
  };

  const formatOptions = [
    { value: "standard", label: "Standard" },
    { value: "formal", label: "Formal" },
    { value: "casual", label: "Casual" },
    { value: "modern", label: "Modern" },
  ];
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium">Template Title</Label>
          <Input
            id="title"
            placeholder="Enter a title for this template"
            className={`bg-white/50 border-2 transition-all ${errors.title ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-primary"}`}
            {...register("title")}
          />
          {errors.title && (
            <p className="text-xs text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="format" className="text-sm font-medium">Format Style</Label>
          <Select defaultValue="standard">
            <SelectTrigger className="bg-white/50 border-2 border-gray-200 focus:border-primary transition-all">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              {formatOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="recipient" className="text-sm font-medium">Recipient</Label>
          <Input
            id="recipient"
            placeholder="Recipient name or [Placeholder]"
            className={`bg-white/50 border-2 transition-all ${errors.recipient ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-primary"}`}
            {...register("recipient")}
          />
          {errors.recipient && (
            <p className="text-xs text-red-500">{errors.recipient.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="sender" className="text-sm font-medium">Sender (Optional)</Label>
          <Input
            id="sender"
            placeholder="Your name or [Placeholder]"
            className="bg-white/50 border-2 border-gray-200 focus:border-primary transition-all"
            {...register("sender")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
        <Input
          id="subject"
          placeholder="Enter email subject"
          className={`bg-white/50 border-2 transition-all ${errors.subject ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-primary"}`}
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-xs text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="salutation" className="text-sm font-medium">Salutation</Label>
          <Input
            id="salutation"
            placeholder="Greeting"
            className="bg-white/50 border-2 border-gray-200 focus:border-primary transition-all"
            {...register("salutation")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="closing" className="text-sm font-medium">Closing</Label>
          <Input
            id="closing"
            placeholder="Closing phrase"
            className="bg-white/50 border-2 border-gray-200 focus:border-primary transition-all"
            {...register("closing")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="content" className="text-sm font-medium">Content</Label>
        <Textarea
          id="content"
          rows={12}
          placeholder="Enter letter content"
          className={`bg-white/50 border-2 transition-all ${errors.content ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-primary"}`}
          {...register("content")}
        />
        {errors.content && (
          <p className="text-xs text-red-500">{errors.content.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <PremiumButton type="submit" loading={loading}>
          Save Template
        </PremiumButton>
      </div>
    </form>
  );
};
