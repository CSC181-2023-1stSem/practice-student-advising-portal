import { theBus } from 'src/the-bus';
import { ToEmit, ToType } from 'src/structs';

export type WorkflowStructs = { type: 'test', arg: 'dummy' };

type WorkflowEvents = ToEmit<WorkflowStructs, WorkflowStructs>;
export type WorkflowTypes = ToType<WorkflowStructs, WorkflowStructs>;


export const TheWorkflows = {
  on(desc: WorkflowEvents) {
    theBus.off(desc.type, desc.cb as VoidFunction);
    theBus.off(desc.type);
    theBus.on(desc.type, desc.cb as VoidFunction);

  },
  off(desc: WorkflowEvents) {
    theBus.off(desc.type);
  },
  emit(desc: WorkflowStructs) {

    theBus.emit(desc.type, desc.arg);
  },
};