import { AdminShell } from "@/components/admin-shell";
import { mediaItems } from "@/lib/site-data";

export default function MediaPage() {
  return (
    <AdminShell title="Media" description="Track uploaded assets, file usage, and content support material.">
      <div className="grid gap-4 md:grid-cols-3">
        {mediaItems.length > 0 ? (
          mediaItems.map((item) => (
            <div key={item.name} className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{item.type}</p>
              <div className="mt-3 text-xl">{item.name}</div>
              <div className="mt-2 text-sm text-[var(--muted-strong)]">{item.size}</div>
              <div className="mt-4 rounded-2xl bg-[var(--paper)] px-4 py-3 text-sm">{item.usedIn}</div>
            </div>
          ))
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-[var(--line)] bg-white p-6 md:col-span-3">
            <p className="font-[family-name:var(--font-display)] text-3xl">No media uploaded.</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted-strong)]">
              Uploaded images and files will appear here after you connect storage and start adding content.
            </p>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
