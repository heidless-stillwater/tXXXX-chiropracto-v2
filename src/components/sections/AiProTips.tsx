"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { generateChiropracticTip } from "@/ai/flows/generate-chiropractic-tip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { Wand2, RefreshCw } from "lucide-react";

type AiTipState = {
  tip: string;
  error?: string;
} | null;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? (
        <>
          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Get Your Tip
        </>
      )}
    </Button>
  );
}

const AiProTips = () => {
  const [state, formAction] = useActionState<AiTipState, FormData>(
    async (prevState, formData) => {
      const userInfo = formData.get("userInfo") as string;
      try {
        const result = await generateChiropracticTip({ userInfo });
        return { tip: result.tip };
      } catch (e: any) {
        return { tip: "", error: e.message || "An unknown error occurred." };
      }
    },
    null
  );

  return (
    <section id="ai-pro-tips" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground">AI-Powered Wellness Tips</h2>
          <p className="text-muted-foreground mt-2 text-lg max-w-3xl mx-auto">
            Get an instant, AI-generated chiropractic tip. For a more personalized suggestion, briefly describe an area of discomfort or your daily activities (e.g., "I sit at a desk all day" or "lower back pain").
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <form action={formAction}>
              <CardHeader>
                <CardTitle>Your Personalized Tip Generator</CardTitle>
                <CardDescription>
                  Enter some info below, or leave it blank for a general tip.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full gap-2">
                  <Label htmlFor="userInfo" className="sr-only">Your Info</Label>
                  <Textarea
                    id="userInfo"
                    name="userInfo"
                    placeholder="e.g., 'I have neck pain from looking at my phone.'"
                    rows={3}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <SubmitButton />
              </CardFooter>
            </form>
            {state && (
              <CardContent className="pt-4">
                <Card className="bg-secondary/50 p-6">
                  <h3 className="font-headline text-lg font-semibold mb-2">Here's Your Pro Tip:</h3>
                  {state.error ? (
                    <p className="text-destructive">{state.error}</p>
                  ) : (
                    <p className="text-foreground/90">{state.tip}</p>
                  )}
                </Card>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AiProTips;
