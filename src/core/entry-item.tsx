import ButtonIcon from "../components/button-icon";
import Container from "../components/container";
import Text from "../components/text";

import Trash from "../assets/icons/trash.svg?react"

type EntryItemProps = {
  hour: string;
  client: string;
  onRemoveEntry: () => void;
}

export default function EntryItem({hour, client, onRemoveEntry}: EntryItemProps) {
  return (
    <Container className="flex items-center px-1 gap-5 h-8">
      <Text variant="title-sm-bold">{hour}</Text>
      <Text variant="title-sm-bold" className="flex flex-auto">{client}</Text>
      <ButtonIcon size="sm" icon={Trash} onClick={onRemoveEntry} />
    </Container>
  )
}