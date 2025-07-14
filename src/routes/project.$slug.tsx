import { createFileRoute } from '@tanstack/react-router'
import JobDetail from '../components/JobDetail'

export const Route = createFileRoute('/project/$slug')({
  component: JobDetail,
})