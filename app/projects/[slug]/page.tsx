import { getProject, getProjects } from "@/lib/projects"
import {Surface, Separator, Button} from "@heroui/react";
import Link from 'next/link'

export async function generateStaticParams() {
    const projects = await getProjects(); 
    return projects.map((project) => ({
        slug: project.slug,
    }))
}
export default async function ProjectPage({
    params,
} : {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = await getProject(slug)

    if (!project) {
        return <div> Project not found! </div>
    }

    return <div className="flex flex-col gap-4 m-4"> 
        <div className="flex flex-row gap-4">
            <Surface className="flex min-w-[40vw] max-w-[60vw] flex-col gap-3 rounded-3xl border border-pink-500 overflow-hidden" variant="default">
                <img
                    alt="Cherries"
                    className="pointer-events-none  inset-0 h-full w-full scale-100 object-cover select-none"
                    loading="lazy"
                    src={project.preview_image}
                />
            </Surface>
            <Surface className="flex min-w-[320px] w-full flex-col gap-3 rounded-3xl p-6 border border-pink-500" variant="default">
                <h1 className="text-xl font-bold text-foreground underline decoration-pink-500 decoration-2 underline-offset-4"> {project.title} </h1>
                <p className="text-sm text-base">
                    {project.introduction}
                </p>

                <Link href={project.git}>
                    <Button variant="ghost" className="border border-pink-500 rounded-md w-full w-auto">
                        <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                        GitHub
                    </Button>
                </Link>
            </Surface>
        </div>
        <Surface className="flex min-w-[320px] w-full flex-col gap-3 rounded-3xl p-6 border border-pink-500" variant="secondary">
            <h3 className="border-l-4 border-pink-500 pl-3 text-base font-semibold text-foreground">Tldr</h3>
            <ul className="list-disc pl-8 space-y-1 text-foreground">
                {project.tldr.map((bullet) => (
                    <li key={bullet} className="text-base">
                        {bullet}
                    </li>
                ))}
            </ul>
            <Separator className="my-4" />

            <h3 className="border-l-4 border-pink-500 pl-3 text-base font-semibold text-foreground">Description</h3>
            <p className="text-sm text-base">
                {project.description}
            </p>
            <Separator className="my-4" />

            <h3 className="border-l-4 border-pink-500 pl-3 text-base font-semibold text-foreground">Technologies</h3>
            <ul className="list-disc pl-8 space-y-1 text-foreground">
                {project.technologies.map((tech) => (
                    <li key={tech} className="text-base">
                        {tech}
                    </li>
                ))}
            </ul>
        </Surface>
        
        {project.images.map((image) => (
            <Surface className="flex min-w-[40vw] w-full flex-col gap-3 rounded-3xl border border-pink-500 overflow-hidden" variant="default">
                <img
                    alt={image}
                    className="pointer-events-none  inset-0 h-full w-full scale-100 object-cover select-none"
                    loading="lazy"
                    src={image}
                />
            </Surface>
        ))}
    </div>
}
