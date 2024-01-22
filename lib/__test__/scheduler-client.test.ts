import { BusinessEntityType } from '../pkg'
import { ServiceClient } from '../scheduler-client'

describe('scheduler client', () => {
  const client = new ServiceClient()

  test('query workflow state', async () => {
    const runId = 'bca20bd3-08f0-4b39-8f5a-dfe5fed57eb2'
    const workflowId = 'file-scheduler/Agents-sm.csv'

    let resp = await client.fileWorkflowState({ runId, workflowId })
    expect(resp.state?.runId).toEqual(runId)
    expect(resp.state?.workflowId).toEqual(workflowId)
  })

  test('search workflow runs', async () => {
    const runId = 'bca20bd3-08f0-4b39-8f5a-dfe5fed57eb2'
    const workflowId = 'file-scheduler/Agents-sm.csv'
    const externalRef = 'scheduler/Agents-sm.csv'

    try {
      let resp = await client.searchWorkflowRuns({ externalRef })
      const hasRuns = resp.runs ? resp.runs.length > 0 : false
      const respRunId = resp.runs ? resp.runs[0].runId : ''
      const respWorkflowId = resp.runs ? resp.runs[0].workflowId : ''
      expect(hasRuns).toEqual(true)
      expect(respRunId).toEqual(runId)
      expect(respWorkflowId).toEqual(workflowId)
    } catch (err) {
      console.error(err)
    }
  })

  test('get business entity', async () => {
    const id = '202252219688'

    let resp = await client.getEntity({ type: BusinessEntityType.AGENT, id })
    expect(resp.entity?.type).toEqual(BusinessEntityType.AGENT)
    expect(resp.entity?.entity.id).toEqual(id)
  })
})
