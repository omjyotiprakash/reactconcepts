import { useState } from "react"

const AllInputFields = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
    college: "",
    yop: "",
    dob: "",
    profile: ""
  })

  const allSkills = ["HTML", "CSS", "js", "React js", "MongoDB", "Node js", "Express js"]

  const {username, age, email, password, gender, skills, college, yop, dob, profile} = form

  const handleForm = (e) => {
    e.preventDefault()
    console.log(form)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }



  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form className="flex items-center flex-col gap-2" onSubmit={handleForm}>
        <input className="border" type="text" name="username" placeholder="username" value={username} onChange={handleChange} />
        <input className="border" type="number" name="age" placeholder="age" value={age} onChange={handleChange} />
        <input className="border" type="email" name="email" placeholder="email" value={email} onChange={handleChange} />
        <input className="border" type="password" name="password" placeholder="password" value={password} onChange={handleChange} />

        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" className="border" value={gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          {
            allSkills.map((ele) => {
              return (
                <label key={ele}>
                  <input type="checkbox" value={ele} checked={skills.includes(ele)}/>{ele}</label>
              )
            })
          }
        </div>
        <input className="border" type="text" name="college" placeholder="college" value={college} onChange={handleChange} />
        <input className="border" type="number" name="yop" placeholder="year of passing" value={yop} onChange={handleChange} />
        <input className="border" type="date" name="dob" value={dob} onChange={handleChange} />
        <input className="border" type="text" name="profile" placeholder="profile url" value={profile} onChange={handleChange} />
        <button type="submit" className="border">submit</button>
      </form>
    </div>
  )
}

export default AllInputFields