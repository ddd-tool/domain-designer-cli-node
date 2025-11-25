import { DIAGRAM_STORAGE_PLUGIN } from './diagram-agg/plugins'
import { DiagramPluginHelper } from './diagram-agg'

DiagramPluginHelper.registerPlugin(DIAGRAM_STORAGE_PLUGIN)

import { AI_ASSIST_PLUGIN } from './ai-assist/plugins'
import { AiAssistAggPluginHelper } from './ai-assist'

AiAssistAggPluginHelper.registerPlugin(AI_ASSIST_PLUGIN)
