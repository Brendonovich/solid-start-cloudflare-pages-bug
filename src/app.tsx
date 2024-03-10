import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';

export default function () {
  return (
    <Router>
      <FileRoutes />
    </Router>
  );
}
