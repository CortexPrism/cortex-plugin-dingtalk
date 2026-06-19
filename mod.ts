// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const dingtalk_send_messageTool: Tool = {
  definition: {
    name: 'dingtalk_send_message',
    description: 'Send message to DingTalk group or user',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[dingtalk] dingtalk_send_message executed');
      return ok('dingtalk_send_message', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'dingtalk_send_message',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const dingtalk_create_approvalTool: Tool = {
  definition: {
    name: 'dingtalk_create_approval',
    description: 'Create an approval process',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[dingtalk] dingtalk_create_approval executed');
      return ok('dingtalk_create_approval', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'dingtalk_create_approval',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const dingtalk_get_departmentTool: Tool = {
  definition: {
    name: 'dingtalk_get_department',
    description: 'Get department members and structure',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[dingtalk] dingtalk_get_department executed');
      return ok('dingtalk_get_department', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'dingtalk_get_department',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const dingtalk_send_dingTool: Tool = {
  definition: {
    name: 'dingtalk_send_ding',
    description: 'Send a DING urgent notification',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[dingtalk] dingtalk_send_ding executed');
      return ok('dingtalk_send_ding', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'dingtalk_send_ding',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-dingtalk] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-dingtalk] Unloading...');
}
export const tools: Tool[] = [
  dingtalk_send_messageTool,
  dingtalk_create_approvalTool,
  dingtalk_get_departmentTool,
  dingtalk_send_dingTool,
];
