import { Icon } from "common/media/icon";
import { Button } from "common/widgets/basic/button";
import { Input } from "common/widgets/basic/input";
import { Select } from "common/widgets/basic/select";
import { Text } from "common/widgets/basic/text";
import { anchorSelectData } from "data/static/selectData";

export default function Home() {
  return (
    <main>
      <div>Task-1</div>
      <Icon icon="Technology" size="xl" />
      <Text
        as="p"
        text="Here we go"
        size="3xl"
        color="dark-blue"
        weight="bold"
      />
      {/* Dark Blue Button */}
      <Button className="ml-10" text="Learn More" variant="rounded-dark-blue" />
      {/* Solid Dak Blue */}
      <Button className="ml-10" text="Learn More" variant="solid-dark-blue" />
      {/* Standard Button */}
      <Button
        className="ml-10"
        text="Learn More"
        variant="standard"
        color="dark-blue"
        weight="medium"
      />
      {/* Rounded Input with label*/}
      <Input placeholder="Search" variant="rounded-light-grey" icon="Search" />
      <br />
      <Input placeholder="Search" variant="rounded-light-grey" />

      <br />
      <Input
        placeholder="Search"
        variant="solid-light-grey"
        label="First Name"
        containerClass="ml-10"
        className="w-96"
      />
      {/* shadow */}
      <div className="shadow-grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        dolor? Blanditiis eaque deserunt tempore? Velit accusamus reprehenderit
        voluptatum corrupti itaque quia vel fuga ipsam earum hic, expedita,
        dicta eum vero.
      </div>
      <Input
        variant="outline"
        icon="Search"
        className="border-none rounded-s-xl"
      />
      <Select data={anchorSelectData} containerClass="mt-10 w-96" />
      <Icon icon="Dashboard" variant="outline" className="h-20 w-20 p-5" />
    </main>
  );
}
