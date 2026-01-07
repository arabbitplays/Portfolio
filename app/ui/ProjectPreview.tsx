import { getProject, ProjectData } from "@/lib/projects";
import {Button, Card, CloseButton} from "@heroui/react";
import Link from 'next/link'

type PreviewProps = {
    project: ProjectData
}

export async function ProjectPreview({ project } : PreviewProps) {
    return (
        <Card className="w-full items-stretch md:flex-row">
            <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[180px] sm:w-[180px]">
                <img
                    alt="PreviewImg"
                    className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                    loading="lazy"
                    src={project.preview_image}
                />
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8">{project.title}</Card.Title>
                    <Card.Description>
                        {project.short_description}    
                    </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{project.tags}</span>
                        <span className="text-xs text-muted"> 
                            <Button>
                                <Link href={project.git}>
                                    GitHub
                                </Link>
                            </Button>
                        </span>
                        <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                        <Button variant="ghost" className="border border-pink-500 rounded-md w-full sm:w-auto">Check it out</Button>
                    </Link>
                </Card.Footer>
            </div>
        </Card>
    );
}
