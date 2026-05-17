import { GiSailboat, GiSteeringWheel } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { IoIosSpeedometer } from 'react-icons/io';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { IconType } from 'react-icons';

export interface BoatSpecDisplay {
  icon: IconType;
  label: string;
  key: string;
}

export const BOAT_SPECS_DISPLAY: BoatSpecDisplay[] = [
  { icon: GiSailboat, label: 'Length', key: 'length' },
  { icon: GiSailboat, label: 'Width', key: 'width' },
  { icon: FaUsers, label: 'Capacity', key: 'capacity' },
  { icon: GiSteeringWheel, label: 'Engine', key: 'engine' },
  { icon: IoIosSpeedometer, label: 'Max speed', key: 'maxSpeed' },
  { icon: IoIosSpeedometer, label: 'Cruise speed', key: 'cruisingSpeed' },
  { icon: BsFillFuelPumpFill, label: 'Fuel tank', key: 'fuelCapacity' },
  { icon: BsFillFuelPumpFill, label: 'Water tank', key: 'waterCapacity' },
];

export interface BoatSpecWithValue {
  icon: IconType;
  label: string;
  value: any;
}

export const getBoatSpecsWithValues = (
  specifications: Record<string, any>,
): BoatSpecWithValue[] => {
  return BOAT_SPECS_DISPLAY.map((spec) => ({
    icon: spec.icon,
    label: spec.label,
    value: specifications[spec.key],
  }));
};
