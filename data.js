/* All editable content lives here: portals, dashboard sample data, FAQ, Terms, Privacy, contacts. */

export const PORTALS = {
  student: {
    label: 'Student', icon: 'user', color: '#f5a524', on: '#0e1b3d', idLabel: 'Roll number', idPh: 'e.g. 21CS1042', demoName: 'Ananya R.',
    blurb: 'Everything for the semester in one place.',
    head: 'Welcome, student.', sub: 'See your attendance, marks, fees and notices in one place.',
    perks: [['check', 'Track attendance by subject'], ['award', 'View results the day they publish'], ['card', 'Pay fees and save receipts']],
    mods: [['check', 'Attendance', 'Subject-wise percentage'], ['cal', 'Timetable', 'Daily class schedule'], ['award', 'Results', 'Internal and semester marks'],
      ['card', 'Fee payment', 'Pay and download receipts'], ['book', 'Library', 'Issued books and dues'], ['brief', 'Placements', 'Drives and applications']]
  },
  staff: {
    label: 'Staff', icon: 'users', color: '#12a198', on: '#0e1b3d', idLabel: 'Employee ID', idPh: 'e.g. EMP2043', demoName: 'Dr. Meera K.',
    blurb: 'Run classes and assessments without paperwork.',
    head: 'Welcome, faculty.', sub: 'Mark attendance, upload marks and manage leave without paperwork.',
    perks: [['check', 'Mark attendance per period'], ['award', 'Upload internal marks'], ['cal', 'Apply for leave and track approval']],
    mods: [['check', 'Mark attendance', 'Per class, per period'], ['award', 'Upload marks', 'Internals and lab scores'], ['file', 'Lesson plans', 'Syllabus and materials'],
      ['cal', 'Leave', 'Apply and track approval'], ['users', 'My students', 'Mentoring and progress'], ['chart', 'Class reports', 'Results and trends']]
  },
  admin: {
    label: 'Admin', icon: 'shield', color: '#4b5bd6', on: '#ffffff', idLabel: 'Admin ID', idPh: 'e.g. ADM001', demoName: 'Admin Office',
    blurb: 'Manage people, money and records college-wide.',
    head: 'Administration.', sub: 'For authorised administrators. All activity is logged.',
    perks: [['users', 'Admissions and student records'], ['chart', 'Reports and analytics'], ['sliders', 'Courses, roles and access']],
    mods: [['users', 'Admissions', 'Applications and seats'], ['user', 'Student records', 'Profiles and documents'], ['card', 'Fee accounts', 'Collections and dues'],
      ['check', 'Exam cell', 'Schedules and results'], ['chart', 'Reports', 'Analytics and exports'], ['sliders', 'Access control', 'Courses, roles, access']]
  }
};

export const DASH = {
  student: {
    stats: [['Attendance', '87%', 'check'], ['CGPA', '8.4', 'award'], ['Fees due', '₹0', 'card'], ['Books issued', '2', 'book']],
    chartT: 'Attendance by subject', chart: [['Maths', 92], ['Physics', 84], ['DSA', 90], ['Networks', 78], ['DBMS', 88]],
    listT: 'Today’s classes', list: [['9:00', 'Data Structures', 'Room 204'], ['10:00', 'Computer Networks', 'Room 112'], ['11:15', 'Database Systems', 'Lab 3'], ['2:00', 'Engineering Maths', 'Room 204']],
    notices: ['Internal test 2 timetable is out', 'Library closes early on Friday', 'Placement drive: registration open']
  },
  staff: {
    stats: [['Classes today', '4', 'cal'], ['Marks pending', '2', 'award'], ['Leave balance', '8 days', 'brief'], ['Students mentored', '24', 'users']],
    chartT: 'Average attendance by class', chart: [['CSE A', 89], ['CSE B', 82], ['ECE A', 91], ['ECE B', 76]],
    listT: 'Today’s schedule', list: [['9:00', 'CSE A, Data Structures', 'Room 204'], ['11:15', 'CSE B, Data Structures', 'Room 206'], ['1:00', 'Lab: Algorithms', 'Lab 2'], ['3:00', 'Mentor meeting', 'Staff room']],
    notices: ['Internal marks upload closes Friday', 'Department meeting on Monday, 10 am', 'Your leave request was approved']
  },
  admin: {
    stats: [['Students', '3,240', 'users'], ['Applications', '412', 'file'], ['Fees collected', '82%', 'card'], ['Open tickets', '7', 'help']],
    chartT: 'Seats filled by department', chart: [['CSE', 96], ['ECE', 81], ['EEE', 64], ['Mech', 58], ['Civil', 44]],
    listT: 'Pending approvals', list: [['Today', 'Admission: 12 documents to verify', 'Admissions'], ['Today', 'Fee waiver request', 'Accounts'], ['Tue', 'New course proposal', 'Academics'], ['Wed', 'Staff leave: 3 requests', 'HR']],
    notices: ['Exam timetable is ready to publish', 'Fee deadline extended to 30 Nov', 'New admin account requested']
  }
};

export const CONTACTS = [
  { icon: 'help', title: 'Portal support', text: 'Login problems, password resets, wrong marks.', mail: 'support@meghainstitutions.edu', tel: '+91 90000 00001' },
  { icon: 'users', title: 'Admissions office', text: 'Applications, documents and counselling.', mail: 'admissions@meghainstitutions.edu', tel: '+91 90000 00002' },
  { icon: 'card', title: 'Accounts and fees', text: 'Fee payment, receipts and scholarships.', mail: 'accounts@meghainstitutions.edu', tel: '+91 90000 00003' }
];

export const FAQ = [
  { title: 'How do I create an account?', body: ['Choose Create account, pick Student, Staff or Admin, then enter your name, email, college ID and a strong password.', 'Your college may need to verify your ID before the account becomes active.'] },
  { title: 'I forgot my password. What now?', body: ['On the sign-in page choose Forgot password and enter your registered email. We send a reset link to that address.', 'If nothing arrives within ten minutes, check your spam folder or contact portal support.'] },
  { title: 'What makes a password acceptable?', body: ['It must be 8 to 64 characters and include an uppercase letter, a lowercase letter, a number and a special character, with no spaces.', 'Longer passwords of 12 characters or more are rated Strong.'] },
  { title: 'Who can see my marks and attendance?', body: ['Only you, your teachers and authorised administrators can see your academic record.', 'Each portal shows only what that role needs.'] },
  { title: 'How do I pay my fees?', body: ['Open the Fee payment module in the student portal, choose the item and pay online. A receipt is saved to your account.', 'For scholarships or refunds, contact the accounts office.'] },
  { title: 'Which browsers are supported?', body: ['The portal works on current versions of Chrome, Edge, Firefox and Safari, on phones, tablets and computers.'] },
  { title: 'Who do I contact for help?', body: ['Write to support@meghainstitutions.edu or call the support desk, Monday to Saturday, 9:00 am to 5:00 pm.', 'The Contact page lists every desk.'] },
  { title: 'Is this site storing my details?', body: ['This preview does not. Sign-in and sign-up are for demonstration only and everything is cleared when you refresh the page.'] }
];

export const TERMS = [
  { title: 'Acceptance of terms', body: ['By creating an account or using the Megha Institutions portal you agree to these terms.', 'If you do not agree, please do not use the portal.'] },
  { title: 'Eligibility and accounts', body: ['Accounts are for current students, staff and authorised administrators of Megha Institutions.', 'You must give accurate details and keep them up to date.'] },
  { title: 'Keeping your login safe', body: ['You are responsible for activity under your account. Choose a strong password and never share it.', 'Tell the support desk at once if you think someone else has used your account.'] },
  { title: 'Acceptable use', body: ['Do not attempt to access other people’s data, disrupt the service, or upload harmful or unlawful content.', 'Do not use automated tools to scrape or overload the portal.'] },
  { title: 'Academic records', body: ['Marks, attendance and fee details shown on the portal are for information. The college’s official records prevail if there is a difference.'] },
  { title: 'Availability', body: ['We aim to keep the portal available but cannot promise uninterrupted access. Planned maintenance will be announced where possible.'] },
  { title: 'Suspension and ending access', body: ['We may suspend or close an account that breaks these terms or when your association with the college ends.'] },
  { title: 'Changes and contact', body: ['We may update these terms from time to time. Continued use means you accept the updated version.', 'Questions can go to support@meghainstitutions.edu.'] }
];

export const PRIVACY = [
  { title: 'What we collect', body: ['Details you give us: name, email, college ID and role.', 'Academic and administrative records created while you use the portal, such as attendance, marks and fee status.'] },
  { title: 'How we use it', body: ['To run your account, show you your records, process fees and send important notices.', 'We do not sell your personal information.'] },
  { title: 'Who can see it', body: ['You, the teachers and administrators who need it for their role, and service providers who help us run the portal under confidentiality terms.'] },
  { title: 'How long we keep it', body: ['Academic records are kept for as long as the college is required to keep them. Other data is deleted when it is no longer needed.'] },
  { title: 'How we protect it', body: ['Access is role-based, connections are encrypted and passwords are never shown or stored in plain text.', 'No system is perfectly secure, so please keep your own password private.'] },
  { title: 'Cookies', body: ['The portal uses only the small amount of storage needed to keep you signed in and remember basic settings.'] },
  { title: 'Your choices', body: ['You can ask to see, correct or delete your information, subject to the college’s record-keeping duties.', 'Write to the support desk to make a request.'] },
  { title: 'About this demo', body: ['This preview website stores nothing. Anything you type is kept only in your browser until you refresh or close the page.'] }
];

export const LEGAL_NOTE = 'Sample text for a demo. Have it reviewed by a qualified professional before real use.';
