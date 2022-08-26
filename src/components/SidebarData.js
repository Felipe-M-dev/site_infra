import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/Home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Infraestructura',
        path: '/Infra',
        icon: <AiIcons.AiFillHdd />,
        cName: 'nav-text',
    },
    {
        title: 'Usuarios',
        path: '/Users',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text',
    },
    {
        title: 'Clientes',
        path: '/Clients',
        icon: <FaIcons.FaHandHoldingUsd />,
        cName: 'nav-text',
    },
    {
        title: 'KPI',
        path: '/Kpi',
        icon: <FaIcons.FaChartBar />,
        cName: 'nav-text',
    },
    {
        title: 'Sobre EGT',
        path: '/About',
        icon: <AiIcons.AiFillInfoCircle />,
        cName: 'nav-text',
    },
    {
        title: 'Contacto',
        path: '/Contact',
        icon: <AiIcons.AiFillMail />,
        cName: 'nav-text',
    }
]