import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import {FaPhone ,FaFile}  from 'react-icons/fa'
const links = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all jobs', path: '/all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'add job', path: '/add-job', icon: <FaWpforms /> },
  { id: 4, text: 'Contacts', path: '/contacts', icon: <FaPhone /> },
  { id: 5, text: 'Documents', path: '/documents', icon: <FaFile /> },
  { id: 6, text: 'profile', path: '/profile', icon: <ImProfile /> },
]

export default links
