import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import Text from "../components/text";

import CalendarBlank from "../assets/icons/calendar-blank.svg?react"
import CaretDown from "../assets/icons/caret-down.svg?react"
import CloudSun from "../assets/icons/cloud-sun.svg?react"
import MoonStars from "../assets/icons/moon-stars.svg?react"
import SunHorizon from "../assets/icons/sun-horizon.svg?react"
import Trash from "../assets/icons/trash.svg?react"
import InputText from "../components/input-text";

export default function Diary() {
  return (
    <Container size="md" className="w-full px-28 py-20">
      <Container className="flex flex-col">
        <Container as="header" className="flex">
          <Container className="flex flex-col">
            <Text variant="title-lg-bold">Sua agenda</Text>
            <Text variant="text-sm-regular">Consulte os seus cortes de cabelo agendados por dia</Text>
          </Container>
          <Button 
            variant="secondary" 
            size="sm" 
            iconLeft={CalendarBlank} 
            iconRight={CaretDown} 
            color="secondary">
              <Container className="flex flex-auto">
                <InputText variant="secondary" size="sm" placeholder="Data" maxLength={10} width={10} />
              </Container>
          </Button>
        </Container>
        <Container className="flex flex-col pt-8 gap-3">
          <Card className="border border-gray-600">
            <Container className="flex items-center border-b border-b-gray-600 py-3 px-5 gap-3">
              <Icon svg={SunHorizon} className="fill-yellow" />
              <Text variant="title-sm-bold" className="flex flex-auto">Manhã</Text>
              <Text variant="title-sm-bold">09h-12h</Text>
            </Container>
            <Container className="p-5 gap-0.5">
              <Container className="flex items-center px-1 gap-5 h-8">
                <Text variant="title-sm-bold">11:00</Text>
                <Text variant="title-sm-bold" className="flex flex-auto">Ryan Dorwart</Text>
                <ButtonIcon size="sm" icon={Trash} />
              </Container>
            </Container>
          </Card>
          <Card className="border border-gray-600">
            <Container className="flex items-center border-b border-b-gray-600 py-3 px-5 gap-3">
              <Icon svg={CloudSun} className="fill-yellow" />
              <Text variant="title-sm-bold" className="flex flex-auto">Tarde</Text>
              <Text variant="title-sm-bold">13h-18h</Text>
            </Container>
            <Container className="p-5 gap-0.5">
              <Container className="flex items-center px-1 gap-5 h-8">
                <Text variant="title-sm-bold">11:00</Text>
                <Text variant="title-sm-bold" className="flex flex-auto">Ryan Dorwart</Text>
                <ButtonIcon size="sm" icon={Trash} />
              </Container>
              <Container className="flex items-center px-1 gap-5 h-8">
                <Text variant="title-sm-bold">11:00</Text>
                <Text variant="title-sm-bold" className="flex flex-auto">Ryan Dorwart</Text>
                <ButtonIcon size="sm" icon={Trash} />
              </Container>
              <Container className="flex items-center px-1 gap-5 h-8">
                <Text variant="title-sm-bold">11:00</Text>
                <Text variant="title-sm-bold" className="flex flex-auto">Ryan Dorwart</Text>
                <ButtonIcon size="sm" icon={Trash} />
              </Container>
            </Container>
          </Card>
          <Card className="border border-gray-600">
            <Container className="flex items-center border-b border-b-gray-600 py-3 px-5 gap-3">
              <Icon svg={MoonStars} className="fill-yellow" />
              <Text variant="title-sm-bold" className="flex flex-auto">Noite</Text>
              <Text variant="title-sm-bold">19h-21h</Text>
            </Container>
            <Container className="p-5 gap-0.5">
              <Container className="flex items-center px-1 gap-5 h-8">
                <Text variant="title-sm-bold">11:00</Text>
                <Text variant="title-sm-bold" className="flex flex-auto">Ryan Dorwart</Text>
                <ButtonIcon size="sm" icon={Trash} />
              </Container>
            </Container>
          </Card>
        </Container>
      </Container>
    </Container>
  )
}