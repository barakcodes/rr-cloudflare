import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function Index() {
  return(
    <div className=" max-w-sm mx-auto">
      <h1 className="text-xl font-semibold">Hello World!</h1>
      <div className="space-y-2">
        <Label htmlFor="input-01">Simple input</Label>
        <Input id="input-01" placeholder="Email" type="email" />
      </div>
      <Button className="mt-4">Button</Button>
    </div>
  )
}
