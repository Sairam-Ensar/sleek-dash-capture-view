import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters.",
  }),
});

interface CreateLetterFormProps {
  type: string;
}

export function CreateLetterForm({ type }: CreateLetterFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: getDefaultTitle(type),
      content: getDefaultContent(type),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  className="min-h-[300px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Create Template</Button>
      </form>
    </Form>
  );
}

function getDefaultTitle(type: string): string {
  const titles = {
    offer: "Job Offer - [Position] at [Company]",
    acceptance: "Acceptance of Job Offer - [Position]",
    declination: "Response to Job Offer - [Position]",
    followup: "Interview Follow-up - [Position]",
    recommendation: "Letter of Recommendation for [Name]",
    business: "Business Communication - [Subject]",
    formal: "Formal Letter - [Subject]",
    cover: "Cover Letter - [Position] Application"
  };
  return titles[type as keyof typeof titles] || "";
}

function getDefaultContent(type: string): string {
  const contents = {
    offer: `Dear [Candidate Name],

We are pleased to offer you the position of [Job Title] at [Company Name]. This letter confirms our offer of employment under the following terms:

- Start Date: [Start Date]
- Salary: [Amount] per annum
- Benefits: [List of Benefits]
- Position: [Full Job Title]
- Department: [Department Name]

Please review the attached documents for complete details of your compensation and benefits package.

We look forward to welcoming you to our team.

Best regards,
[Your Name]
[Your Title]
[Company Name]`,
    acceptance: `Dear [Hiring Manager's Name],

I am writing to formally accept the position of [Job Title] at [Company Name]. Thank you for offering me this opportunity.

As discussed, I understand that I will begin work on [Start Date] with a starting salary of [Amount] per annum.

I look forward to joining the team and contributing to [Company Name]'s continued success.

Best regards,
[Your Name]`,
    declination: `Dear [Hiring Manager's Name],

I am writing to inform you that I will not be accepting the position of [Job Title] at [Company Name].

Thank you for offering me this opportunity. I wish you the best in your search for a suitable candidate.

Best regards,
[Your Name]`,
    followup: `Dear [Interviewer's Name],

I am writing to thank you for taking the time to interview me for the position of [Job Title] at [Company Name].

I enjoyed learning more about the position and the company. I am very interested in the opportunity and believe that my skills and experience would be a valuable asset to your team.

Thank you again for your time and consideration.

Best regards,
[Your Name]`,
    recommendation: `Dear [Recipient's Name],

I am writing to recommend [Candidate's Name] for the position of [Job Title] at [Company Name].

I have known [Candidate's Name] for [Number] years as their [Relationship]. During that time, I have been consistently impressed with their [Skills and Qualities].

I am confident that [Candidate's Name] would be a valuable asset to your team.

Best regards,
[Your Name]`,
    business: `Dear [Recipient's Name],

I am writing to you today to [Purpose of Letter].

[Body of Letter]

Thank you for your time and consideration.

Best regards,
[Your Name]`,
    formal: `Dear [Recipient's Name],

I am writing to you today to [Purpose of Letter].

[Body of Letter]

Thank you for your time and consideration.

Sincerely,
[Your Name]`,
    cover: `Dear [Hiring Manager's Name],

I am writing to express my interest in the position of [Job Title] at [Company Name].

I have been working in the [Industry] industry for [Number] years and have a proven track record of success in [Achievements].

I am confident that my skills and experience would be a valuable asset to your team.

Thank you for your time and consideration.

Sincerely,
[Your Name]`
  };
  return contents[type as keyof typeof contents] || "";
}
