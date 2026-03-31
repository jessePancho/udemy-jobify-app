import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Camera} from 'lucide-react'

export default function Home() {
  return (
<div>
  <Button variant='outline' size='icon'>default button</Button>
<Camera />
</div>
  );
}
