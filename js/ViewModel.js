//education
education.display = function(){
  var newDiv = document.createElement("div");
  newDiv.classList.toggle("education-entry");
  $("#education").append(newDiv);
  var educationEntry = $(".education-entry:last");
  for (var s = 0; s < education.schools.length; s++){

    var formattedNameAndDegree = HTMLschoolNameAndDegree.replace("%firstData%", education.schools[s].name);
    formattedNameAndDegree = formattedNameAndDegree.replace("%secData%", education.schools[s].degree);
    formattedNameAndDegree = formattedNameAndDegree.replace("%data%", education.schools[s].url);
    educationEntry.append(formattedNameAndDegree);
    educationEntry.append(HTMLschoolDates.replace("%data%", education.schools[s].dates));
    educationEntry.append(HTMLschoolLocation.replace("%data%", education.schools[s].location.title));
    if (education.schools[s].grade)
        educationEntry.append("<div class='score'><h2 class='score-gpa'>" + education.schools[s].grade + "</h2></div>");
    educationEntry.append(HTMLschoolAward);
    for (var n = 0; n < education.schools[s].Awards.length; n++){
      $(".awards").append(HTMLschoolAwardList.replace("%data%", education.schools[s].Awards[n]));
    }
    if (s !== (education.schools.length-1))
      educationEntry.append("<hr>");
  }

};
education.display();

work.display = function(){
  var newDiv = document.createElement("div");
  newDiv.classList.toggle("work-entry");
  $("#workExperience").append(newDiv);
  var $workEntry = $(".work-entry:last");
  for (var i = 0; i < work.jobs.length; i++){
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    $workEntry.append(formattedEmployer + formattedWorkTitle);
    $workEntry.append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
    $workEntry.append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
    $workEntry.append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    if (i !== (work.jobs.length-1))
        $workEntry.append("<hr>");
  }
};
work.display();

//project
project.display = function(){
  var newDiv = document.createElement("div");
  newDiv.classList.toggle("project-entry");
  $("#projects").append(newDiv);
  var projectEntry = $(".project-entry:last");
  for (var p = 0; p < project.projects.length; p++){
    if (p === 3)
        projectEntry.append("<a class='title-content' href='game/index.html'>" + project.projects[p].title + "<span class='click-me'> click me :)</span></a>");
    else
        projectEntry.append(HTMLprojectTitle.replace("%data%", project.projects[p].title));
    projectEntry.append(HTMLprojectLocation.replace("%data%", project.projects[p].location));
    projectEntry.append(HTMLprojectDates.replace("%data%", project.projects[p].dates));
    projectEntry.append(HTMLprojectDescription.replace("%data%", project.projects[p].description));
    for (var b = 0; b < project.projects[p].images.length; b++){
      projectEntry.append(HTMLprojectImage.replace("%data%", project.projects[p].images[b]));
    }
    if (p !== (project.projects.length-1))
      projectEntry.append("<hr>");
  }
};
project.display();

//activity
activity.display = function(){
  var newDiv = document.createElement("div");
  newDiv.classList.toggle("activity-entry");
  $("#activity").append(newDiv);
  var activityEntry = $(".activity-entry:last");
  for (var s = 0; s < activity.activities.length; s++){
    activityEntry.append(HTMLactivityTitle.replace("%data%", activity.activities[s].title));
    activityEntry.append(HTMLactivityDates.replace("%data%", activity.activities[s].dates));
    activityEntry.append(HTMLactivityLocation.replace("%data%", activity.activities[s].location));
    activityEntry.append(HTMLactivityDescription.replace("%data%", activity.activities[s].description));
    if (s !== (activity.activities.length-1))
      activityEntry.append("<hr>");
  }

};
activity.display();

$("#mapDiv").append(googleMap);
