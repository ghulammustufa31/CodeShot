export const SNIPPETS = [
    {
        id: 0,
        caption: 'React Component Sample',
        code: `class Main extends Component {
            render() {
                return(
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/home">
                                <Home />
                            </Route>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Redirect to="home" />
                        </Switch>                
                        <Footer />
                    </div>
                );
            }
        }`,
        tags: [
            {
                id: 0,
                value: 'react',
                label: 'React'
            },
            {
                id: 1,
                value: 'javascript',
                label: 'Javascript'
            }
        ]
    },
    {
        id: 1,
        caption: 'C# Code Sample',
        code: `public class Dependent
        {
            public string PersonnelNumber { get; set; }
            public string EmployeeName { get; set; }
            public string Designation { get; set; }
            public string Department { get; set; }
            public string SalaryGrade { get; set; }
            public string TypeofFamilyRecord { get; set; }
            public string LastName { get; set; }
            public string FirstName { get; set; }
            public string GenderKey { get; set; }
            public string DateofBirth { get; set; }
            public string StartDate { get; set; }
            public string EndDate { get; set; }
            public string Status { get; set; }
        }`,
        tags: [
            {
                id: 0,
                value: 'c#',
                label: 'C#'
            },
            {
                id: 1,
                value: 'c# class',
                label: 'C#'
            }
        ]
    }
]