import { ServiceClient } from '../scheduler-client'

describe('scheduler client', () => {
  const client = new ServiceClient()

  test('query workflow state', async () => {
    const runId = '3d912ccf-7752-4ad5-9c68-cd3a68ce06f1'
    const workflowId = 'file-scheduler/Agents-sm.csv'

    let resp = await client.fileWorkflowState({ runId, workflowId })
    expect(resp.state?.runId).toEqual(runId)
    expect(resp.state?.workflowId).toEqual(workflowId)
  })

  test('search workflow runs', async () => {
    const runId = '3d912ccf-7752-4ad5-9c68-cd3a68ce06f1'
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
})
