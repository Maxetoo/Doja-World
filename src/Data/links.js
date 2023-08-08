import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineCompass,
  AiFillCompass,
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai'

export const routeLinks = [
  {
    id: 0,
    link: '/',
    icon: <AiOutlineHome />,
    activeIcon: <AiFillHome />,
  },
  {
    id: 1,
    link: '/explore',
    icon: <AiOutlineCompass />,
    activeIcon: <AiFillCompass />,
  },
  {
    id: 2,
    link: '/likes',
    icon: <AiOutlineHeart />,
    activeIcon: <AiFillHeart />,
  },
]
