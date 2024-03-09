import { Icon } from "common/media/icon";
import { Button } from "common/widgets/basic/button";
import { Input } from "common/widgets/basic/input";
import { Text } from "common/widgets/basic/text";

export default function Home() {
  return (
    <main>
      <div>Task-1</div>
      <Icon icon="Technology" size="xl" />
      <Text as="p" text="Here we go" variant="xs-regular-purple-blue" />
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
    </main>
  );
}
