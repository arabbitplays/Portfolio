import { getProjects } from '@/lib/projects'
import Link from 'next/link'
import { ProjectPreview } from '@/ui/ProjectPreview'
 
export default async function Page() {
    const projects = await getProjects()
     
    return (
        <ul>
            {projects.map((project) => (
                <li key={project.slug} className="m-4">
                    <ProjectPreview project={project} />
                </li>
            ))}
        </ul>
    )
}
