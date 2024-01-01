'use Client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserProfile } from '@/scripts/types/dashboard';
import { SelectItem } from './ui/select';
import { SelectItems } from './SelectItems';

export function EditProfile({ user }: { user: UserProfile }) {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="userSettings">User Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue={user.name} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue={user.email} />
            </div>

            <div className="space-y-1">
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" defaultValue={user.bio} />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={user.email} />
            </div>

            <div className="space-y-1">
              <Label htmlFor="interests">Interests</Label>
              <SelectItems
                title={'Interests'}
                label={'Interests'}
                values={['JavaScript', 'TypeScript', 'Web Development']}
              />
              {user.interests.map((interest) => (
                <div key={interest}>
                  <Input id="interests" defaultValue={interest} />
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <Label htmlFor="changepassword">Change Password</Label>
              {/* <Input id="email" type="pa" defaultValue={user.email} /> */}
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="userSettings">
        <Card>
          <CardHeader>
            <CardTitle>User Settings</CardTitle>
            <CardDescription>
              Make changes to your user Settings here. Click save when
              you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>Not Implemented</div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
