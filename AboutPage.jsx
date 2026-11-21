import Icon from './Icon.jsx';

export default function AboutPage() {
  return (
    <div className="wrap about">
      <div>
        <h1>About Megha Institutions</h1>
        <p>Megha Institutions, College of Technology, prepares engineers and technologists through rigorous teaching, hands-on labs and close industry links.</p>
        <p>This management system brings the daily work of the college together. Students see attendance, marks and dues. Staff handle classes, assessments and leave. The administration keeps records, fees and reports in one place.</p>
        <ul className="ticks">
          {['Separate, role-based access for each portal', 'One record for every student, from admission to placement', 'Notices and results published the moment they are approved']
            .map((t) => <li key={t}><Icon n="ok" className="sm" />{t}</li>)}
        </ul>
      </div>
      <aside className="dark-card">
        <Icon n="layers" className="big" />
        <h2>Who uses what</h2>
        <dl>
          <dt>Students</dt><dd>Attendance, results, fees, library, placements</dd>
          <dt>Staff</dt><dd>Attendance entry, marks, lesson plans, leave</dd>
          <dt>Administration</dt><dd>Admissions, accounts, exams, reports, access</dd>
        </dl>
      </aside>
    </div>
  );
}
