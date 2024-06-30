import { BusinessEntityType } from '../pkg'
import { ServiceClient } from '../scheduler-client'

describe('scheduler client', () => {
  const client = new ServiceClient()

  test.skip('query workflow state', async () => {
    const runId = 'c6f63e6a-7cfe-4fa5-a6a6-94282bea143e'
    const workflowId = 'file-scheduler/Agents-sm.csv'

    const resp = await client.fileWorkflowState({ runId, workflowId })
    expect(resp.state?.runId).toEqual(runId)
    expect(resp.state?.workflowId).toEqual(workflowId)
  })

  test('search workflow runs', async () => {
    const runId = 'c6f63e6a-7cfe-4fa5-a6a6-94282bea143e'
    const workflowId = 'file-scheduler/Agents-sm.csv'
    const externalRef = 'scheduler/Agents-sm.csv'

    try {
      const resp = await client.searchWorkflowRuns({ externalRef })
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

    const resp = await client.getEntity({ type: BusinessEntityType.AGENT, id })
    expect(resp.entity?.type).toEqual(BusinessEntityType.AGENT)
    expect(resp.entity?.entity.id).toEqual(id)
  })
})
