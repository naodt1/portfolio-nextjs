"use client";

import { useState } from "react";
import { projects as defaultProjects, Project, TechId } from "@/data/projects";
import { TECH_OPTIONS } from "@/data/tech";
import Navbar from "@/app/(home)/components/Navbar";
import { Plus, Edit2, Trash2, X, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";

const EMPTY_PROJECT: Omit<Project, "id"> = {
  title: "",
  description: "",
  cover: "",
  link: "",
  tech: [],
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function generateTs(projectList: Project[]): string {
  const lines = projectList.map((p) => {
    const tech = p.tech.map((t) => `"${t}"`).join(", ");
    return `  {
    id: "${p.id}",
    title: "${p.title.replace(/"/g, '\\"')}",
    description:
      "${p.description.replace(/"/g, '\\"')}",
    cover: "${p.cover}",
    link: "${p.link}",
    tech: [${tech}],
  }`;
  });
  return `export const projects: Project[] = [\n${lines.join(",\n")},\n];`;
}

export default function AdminClient() {
  const [projectList, setProjectList] = useState<Project[]>(defaultProjects);
  const [editing, setEditing] = useState<Project | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [draft, setDraft] = useState<Omit<Project, "id">>(EMPTY_PROJECT);
  const [copied, setCopied] = useState(false);
  const [showExport, setShowExport] = useState(false);

  const openAdd = () => {
    setDraft(EMPTY_PROJECT);
    setEditing(null);
    setIsAdding(true);
  };

  const openEdit = (project: Project) => {
    setDraft({ ...project });
    setEditing(project);
    setIsAdding(true);
  };

  const closeForm = () => {
    setIsAdding(false);
    setEditing(null);
    setDraft(EMPTY_PROJECT);
  };

  const saveProject = () => {
    if (!draft.title.trim()) return;
    if (editing) {
      setProjectList((prev) =>
        prev.map((p) => (p.id === editing.id ? { ...draft, id: editing.id } : p))
      );
    } else {
      const id = slugify(draft.title) || `project-${Date.now()}`;
      setProjectList((prev) => [...prev, { ...draft, id }]);
    }
    closeForm();
  };

  const deleteProject = (id: string) => {
    setProjectList((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleTech = (techId: TechId) => {
    setDraft((prev) => ({
      ...prev,
      tech: prev.tech.includes(techId)
        ? prev.tech.filter((t) => t !== techId)
        : [...prev.tech, techId],
    }));
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generateTs(projectList));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetToDefaults = () => {
    if (confirm("Reset all projects to the original defaults?")) {
      setProjectList(defaultProjects);
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden text-white">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />

        <div className="mt-10 animate-move-up">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold">Projects CMS 🗂️</h1>
              <div className="w-40 h-2 bg-green-500 rounded-full mt-1" />
              <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2 mt-1" />
            </div>
            <div className="flex gap-3">
              <button
                onClick={resetToDefaults}
                className="px-4 py-2 text-sm border border-gray-700 rounded-md hover:border-gray-500 transition-colors text-gray-300"
              >
                Reset defaults
              </button>
              <button
                onClick={openAdd}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add project
              </button>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-4 mb-8">
            Edit your projects here. When done, copy the generated code at the bottom and paste it
            into{" "}
            <code className="bg-gray-900 px-1 py-0.5 rounded text-green-400">
              data/projects.ts
            </code>{" "}
            to save permanently.
          </p>

          {/* Add / Edit Form */}
          {isAdding && (
            <div className="bg-gray-900 rounded-md p-6 mb-8 border border-gray-800">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold">
                  {editing ? "Edit project" : "New project"}
                </h2>
                <button onClick={closeForm} className="text-gray-500 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400 block mb-1">Title *</label>
                  <input
                    type="text"
                    value={draft.title}
                    onChange={(e) => setDraft((p) => ({ ...p, title: e.target.value }))}
                    placeholder="My Awesome App"
                    className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 block mb-1">Link *</label>
                  <input
                    type="text"
                    value={draft.link}
                    onChange={(e) => setDraft((p) => ({ ...p, link: e.target.value }))}
                    placeholder="https://github.com/..."
                    className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 block mb-1">Cover image path</label>
                  <input
                    type="text"
                    value={draft.cover}
                    onChange={(e) => setDraft((p) => ({ ...p, cover: e.target.value }))}
                    placeholder="/my-project.jpg"
                    className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    Place image in <code>/public</code> and enter path here
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-gray-400 block mb-1">Description *</label>
                  <textarea
                    value={draft.description}
                    onChange={(e) => setDraft((p) => ({ ...p, description: e.target.value }))}
                    placeholder="A short description of what the project does and why it matters."
                    rows={3}
                    className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors resize-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-gray-400 block mb-2">Tech stack</label>
                  <div className="flex flex-wrap gap-2">
                    {TECH_OPTIONS.map((tech) => {
                      const Icon = tech.Icon;
                      const selected = draft.tech.includes(tech.id);
                      return (
                        <button
                          key={tech.id}
                          onClick={() => toggleTech(tech.id)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm border transition-all ${
                            selected
                              ? "bg-green-500 border-green-500 text-black font-semibold"
                              : "bg-black border-gray-700 text-gray-300 hover:border-gray-500"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {tech.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-5">
                <button
                  onClick={closeForm}
                  className="px-4 py-2 border border-gray-700 rounded-md text-gray-300 hover:border-gray-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveProject}
                  disabled={!draft.title.trim()}
                  className="px-5 py-2 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {editing ? "Save changes" : "Add project"}
                </button>
              </div>
            </div>
          )}

          {/* Project List */}
          <div className="space-y-3">
            {projectList.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-900 rounded-md p-4 flex items-center justify-between gap-4 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="text-gray-600 text-sm w-6 shrink-0">{index + 1}</span>
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{project.title}</p>
                    <p className="text-gray-400 text-sm truncate">{project.link}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-black border border-gray-700 rounded px-1.5 py-0.5 text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => openEdit(project)}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-gray-800"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="p-2 text-gray-400 hover:text-red-400 transition-colors rounded-md hover:bg-gray-800"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Export */}
          <div className="mt-10 bg-gray-900 rounded-md border border-gray-800">
            <button
              onClick={() => setShowExport((v) => !v)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800 transition-colors rounded-md"
            >
              <span className="font-semibold text-green-400">📋 Export — copy to data/projects.ts</span>
              {showExport ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {showExport && (
              <div className="p-4 pt-0">
                <div className="relative">
                  <pre className="bg-black rounded-md p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap border border-gray-800">
                    {generateTs(projectList)}
                  </pre>
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-300 hover:border-green-500 hover:text-green-400 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Replace the <code className="text-gray-400">export const projects</code> array in{" "}
                  <code className="text-gray-400">data/projects.ts</code> with the code above.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
