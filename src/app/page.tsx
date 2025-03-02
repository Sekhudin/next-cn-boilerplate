import { Button } from "src/shared/ui/button";
import { Input } from "src/shared/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 p-12">
      <div className="flex space-x-2 items-end">
        <Button size="xs">Browse Blocks</Button>
        <Button size="sm">Browse Blocks</Button>
        <Button className="w-56">Button</Button>
        <Button size="lg">Button</Button>
        <Button size={"icon"}>1</Button>
        <Button size={"icon:sm"}>1</Button>
        <Button size={"icon:xs"}>1</Button>
      </div>

      <div className="w-56">
        <Input className="w-52" />
      </div>
    </div>
  );
}
