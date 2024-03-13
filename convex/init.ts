import { api } from "./_generated/api";
import { internalMutation, type MutationCtx } from "./_generated/server";
import { Id } from "./_generated/dataModel";

const data = [
  {
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex hendrerit, vehicula lorem non, sollicitudin velit.",
    "title": "My First Blog Post",
    "type": 0
  },
  {
    "body": "I achieved my goal of running a marathon! It was an amazing experience.",
    "title": "Marathon Achievement",
    "type": 1
  },
  {
    "body": "Today's log: Worked on implementing new features for the project. Progress is steady.",
    "title": "Project Work Log",
    "type": 2
  },
  {
    "body": "Excited to announce the launch of my new project! Check it out at example.com",
    "title": "New Project Launch",
    "type": 3
  },
  {
    "body": "Attended a networking event today and met some interesting people. Looking forward to collaborating with them.",
    "title": "Networking Event",
    "type": 5
  }
] as const;
function getRandomSlice(list: Array<Id<'tags'>>) {
  const startIndex = Math.floor(Math.random() * list.length);
  const endIndex = Math.floor(Math.random() * (list.length - startIndex)) + startIndex;
  return list.slice(startIndex, endIndex + 1);
}

const tags = ["k174vdxsd0dhrar87vr5qr65456m6n4h", "k17aerrr8dbhpcp4rf9xpewh2s6m75kg", "k176e055sxseb93k3vh2692wc96m7h4g", "k178kc8pz86gazrm9ck6byzc6n6m6nr3"] as  Array<Id<'tags'>>;
export default internalMutation({
  handler: async (ctx: MutationCtx) => {
    // If this project already has a populated database, do nothing
    const anyMessage = await ctx.db.query("logs").first();
    if (anyMessage) return;

    // If not, post each of the seed messages with the given delay
    for (const item of data) {
      await ctx.scheduler.runAfter(10, api.logs.createLog, {
        ...item,
        tag_id_list: getRandomSlice(tags),
      });
    }
  },
});
