# Problem Statement

Manual attendance is tedious and time consuming, inherent to proxies and manual errors, late updation of the student’s attendance on ERP site.


# Smart Attendance through Facial Recognition 

Attendance through facial recognition is the future. This application is a low-cost, adaptive and extensible attendance system focused on eradicating the traditional attendance procedure (calling out names) prone to proxies and manual errors.

------------------------------------------


# How does it work? 

For taking attendance we'll be using the cameras installed in the classroom/office and perform facial recognition on the faces of students/employees. During their registration specific number of photos will be taken of pupil to be added to the dataset, which later on be used to train our deep learning face recognition model which will be done every year to retrain the model to prevent faulty system due to evolving faces.

Students can view their daily attendance on their ERP which will contain two divisions, a login page for the students with view-access only and an Admin section with read and write access. We will also provide a report option to students and quick response to sort out any issues regarding any faults in attendance marking. 


![Workflow](https://github.com/hackatron19/hackover_booze/blob/master/img/IMG01.jpg)

 
# Technologies Used

## Facial Recognition
We have used a Machine Learning model Keras-OpenFace which is an open source Keras implementation of the OpenFace (Originally Torch implemented)

### Algorithm used
* Haar Cascade Frontal Face
* VGG16 with ImageNet weights

## Dev and UI 
* React JS (for frontend)
* Node Js (for backend)
------------------------------------------

# Future Use Case
 The growing trend of Machine Learning and its abundant application scenario makes our project a perfect ML implementation. 
 Our model is deployable in almost all size of organisations, ranging from small-scale village schools to large MNC in place.

 ----

 # Cost Effectiveness
 The cost factor is highly reliable on the use case.
 We've divided the scenario into 3 major sections.

 ### 1. Small-scale 
 These orgs as we assume won't have any of the previous installations, and accordingly we'll have to set up the camera system, server set-up, and the installation. This roughly will cost around 6k.

 ### 2. Mid-scale
 We are asssuming that these orgs will have a proper camera system in place. This will cut down the cost of camera system and installation. They will only be paying the charges of the server and database hosted on the server.
 Choosing AWS, it will cost around Rs. 1kc(for once) and around Rs. 500 for rest 11 months.

### 3. Large-scale
These will have their own server together with proper camera system.
These oragnisations are the most benifitted. They will hardly payapart from software installation charges.

### Contributors
* [Priyanshu Kumar](https://github.com/priyanshu2510)
* [Kushagra Singh](https://github.com/sportykush)
* [Rahul Harlalka](https://github.com/rahulharlalka)
* [Vishal Gorai](https://github.com/greyhatlinux)