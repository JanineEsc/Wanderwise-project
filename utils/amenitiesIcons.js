// constants/amenitiesIcons.js

import {
  AirVent,
  BedDouble,
  BedSingle,
  ShowerHead,
  Wifi,
  WifiOff,
  FlameKindling,
  Caravan,
  Backpack,
  Trees,
  Dumbbell,
  House,
} from "lucide-react";

export const amenitiesIcons = {
  House: <House className="text-iconColor" />,
  AC: <AirVent className="text-iconColor" />,
  Shower: <ShowerHead className="text-iconColor" />,
  WiFi: <Wifi className="text-iconColor" />,
  NoWiFi: <WifiOff className="text-iconColor" />,
  DoubleBed: <BedDouble className="text-iconColor" />,
  SingleBed: <BedSingle className="text-iconColor" />,
  OutdoorFirePit: <FlameKindling className="text-iconColor" />,
  CampingFriendly: <Caravan className="text-iconColor" />,
  StorageRoom: <Backpack className="text-iconColor" />,
  Nature: <Trees className="text-iconColor" />,
  Gym: <Dumbbell className="text-iconColor" />,
};