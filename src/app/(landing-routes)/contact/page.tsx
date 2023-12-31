"use client";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

const Page = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)

    async function sendEmail() {
        try {
            setLoading(true);

            const name = document.getElementById('name') as HTMLInputElement;
            const email = document.getElementById('email') as HTMLInputElement;
            const message = document.getElementById('message') as HTMLInputElement;

            const data = {
                name: name.value,
                email: email.value,
                message: message.value,
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const res = await response.json();

            if (res.status === 200) {
                toast({
                    title: "Success",
                    description: res.message,
                })
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="grid w-full gap-4 max-w-3xl">
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Contact US</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input required id="name" type="text" placeholder="name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input required id="email" type="email" placeholder="m@example.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">How can we help you?</Label>
                            <Textarea required id="message" placeholder="Hi, How can it help me in my studies?" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            onClick={() => sendEmail()}
                            className="w-full"
                        >
                            {loading ? (
                                <p>loading</p>
                            ) : (
                                <>
                                    Send Message
                                </>
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}


export default Page