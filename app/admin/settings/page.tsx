import { AdminShell } from "@/components/admin-shell";
import { settings } from "@/lib/site-data";

export default function SettingsPage() {
  return (
    <AdminShell title="Settings" description="Manage publication identity, sender details, and environment-level defaults.">
      <div className="rounded-[2rem] border border-[var(--line)] bg-white p-6">
        <div className="space-y-4">
          {settings.map((setting) => (
            <label key={setting.label} className="block">
              <div className="mb-2 text-sm text-[var(--muted)]">{setting.label}</div>
              <input className="w-full rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3" defaultValue={setting.value} />
            </label>
          ))}
        </div>
        <button className="mt-5 rounded-full bg-[var(--ink)] px-5 py-3 text-white">Save settings</button>
      </div>
    </AdminShell>
  );
}
