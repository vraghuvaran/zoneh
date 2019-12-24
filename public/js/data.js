$(document).ready(function(){
	$.getJSON("/data", function(d)
                   {	
		$("#objective").text(d.objective);
                                      $("#front_end").text(d.skills.Front_end);
                                      $("#Other").text(d.skills.Other);
                                      $("#os").text(d.skills["Operating System"]);
                                      $("#backened").text(d.skills.Backend);
                                      $("#id1").text(d.Experience.id1);
                                      $("#id2").text(d.Experience.id2);
                                      $("#id3").text(d.Experience.id3);
                                      $("#id4").text(d.Experience.id4);
                                      $("#btech").text(d.Education.btech);
                                      $("#Intermediate").text(d.Education.Intermediate);
                                      $("#school").text(d.Education.school);
                                      $("#t1").text(d.Trainings.t1);
                                      $("#t2").text(d.Trainings.t2);
                                      $("#t3").text(d.Trainings.t3);
                                      $("#a1").text(d.Achievements.a1);
                                      $("#a2").text(d.Achievements.a2);
                                     $("#dob").text(d.personaldetails.dob);
                                     $("#age").text(d.personaldetails.age);
                                     $("#lp").text(d.personaldetails.lp);
                                     $("#strengths").text(d.personaldetails.strengths);
                                     $("#hobbies").text(d.personaldetails.hobbies);
	})
}) 