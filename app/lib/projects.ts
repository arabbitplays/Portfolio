import fs from 'fs'
import path from 'path'

export type ProjectData = {
    slug: string
    title: string
    short_description: string
    preview_image: string
    git: string
    tags: string
}

const projects_dir = path.join(process.cwd(), 'data/projects')

export async function getProjects(): Promise<ProjectData[]> {
    const filenames = fs.readdirSync(projects_dir);
    const projects: ProjectData[] = filenames.map((file) => {
        const file_path = path.join(projects_dir, file)
        const content = fs.readFileSync(file_path, 'utf8')
        return JSON.parse(content) as ProjectData
    })
    return projects
}

export async function getProject(slug: string): Promise<ProjectData | null> {
    const file_path = path.join(projects_dir, `${slug}.json`)
    console.log(slug)
    if (!fs.existsSync(file_path)) return null

    const content = fs.readFileSync(file_path, 'utf8')
    return JSON.parse(content) as ProjectData
}
