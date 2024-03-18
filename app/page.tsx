import { Icon } from "common/media/icon";
import { Button } from "common/widgets/basic/button";
import { Input } from "common/widgets/basic/input";
import { Select } from "common/widgets/basic/select";
import { Text } from "common/widgets/basic/text";
import { anchorSelectData } from "data/static/selectData";

export default function Home() {
  return (
    <main>
      <Text
        as="h1"
        text="Nomad Tax Pro"
        size="xl"
        className="text-center mt-20"
      />
    </main>
  );
}
