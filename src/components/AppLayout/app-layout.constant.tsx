import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { getMenuItem } from './app-layout.utils'

export const menuItems: MenuItem[] = [
  getMenuItem('Option 1', '1', <PieChartOutlined />),
  getMenuItem('Option 2', '2', <DesktopOutlined />),
  getMenuItem('Option 3', '3', <TeamOutlined />, [
    getMenuItem('Tom', '3.3'),
    getMenuItem('Bill', '3.4'),
    getMenuItem('Alex', '3.5'),
  ]),
  getMenuItem('Option 4', '4', <UserOutlined />),
  getMenuItem('Option 5', '5', <FileOutlined />),
]
