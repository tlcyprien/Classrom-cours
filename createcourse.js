function createlistofcourse() {
  var spreadsheet = SpreadsheetApp.openById("XXXXXX"); //recuperer à partir de l'id le classeur contenant la liste des cours
  var sheet = spreadsheet.getSheets()[1]; // la feuille (sheet) du classeur contenant la liste
  var data = sheet.getDataRange().getValues();
  var namec; //variable devant contenir le nom du cours
  var sec; //variable devant contenir la section du cours 
  
  for (var i = 1; i < data.length; i++) { //commencer à lire à partir de la 2e lignes
    namec = data[i][0]+ ': ' + data[i][1];
    sec = data[i][2];
    //les lignes suivantes sont celles de la création de cours sur Classroom
    var cours = {
        name: namec,
        section: sec,
        courseState: 'ACTIVE',
        ownerId: 'classroom.manager@fse-uy1.cm'
    };
    var course = Classroom.Courses.create(cours);
    Logger.log('Cours créé: %s (%s)', course.name, course.id)
    //Logger.log('Cours : %s dans les section %s', namec, sec)
  }
}
