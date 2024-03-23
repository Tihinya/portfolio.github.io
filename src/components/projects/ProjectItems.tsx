import React from "react"
import { HiOutlineArrowSmRight } from "react-icons/hi"

interface ProjectItemProps {
    item: {
        id: number
        image: string
        title: string
        category: string // Add any additional properties here
    }
}

const ProjectItems: React.FC<ProjectItemProps> = ({ item }) => {
    return (
        <div
            className="project__card"
            key={item.id}>
            <img
                className="project__img"
                src="../../assets/project1.webp"
                alt=""
            />
            <h3 className="project__title">{item.title}</h3>
            <a
                href={`#${item.id}`}
                className="project__button"
                key={`${item.id}-demo`}>
                Demo <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </div>
    )
}

export default ProjectItems
