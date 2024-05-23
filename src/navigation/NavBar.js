import { Pressable, Platform, View } from 'react-native'
import {
  HomeIcon,
  HeartIcon,
  ShoppingCartIcon,
  SunIcon,
  MoonIcon,
} from 'react-native-heroicons/outline'

export default function Navbar() {
  return (
    <View
      className='px-8 py-6 bg-white shadow-top flex-row items-center justify-between'
    >
      <HomeIcon color="black" size={28} />
      <HeartIcon color="black" size={28} />
      <ShoppingCartIcon color="black" size={28} />
      <Pressable>
        <MoonIcon color="black" size={28} />
      </Pressable>
    </View>
  )
}