// Signals and slots
//=================================================
Widget::Widget(QWidget *parent)
    : QWidget(parent)
    , ui(new Ui::Widget)
{
    ui->setupUi(this); // Only use one of the below for connecting slots
    //String notation
    connect(ui->pushButton, SIGNAL(clicked()),this, SLOT(changeText()));

    //Function notation
    connect(ui->pushButton, &QPushButton::clicked,this,&Widget::changeText);

    //Lambda notation
    connect(ui->pushButton,&QPushButton::clicked, [=](){
       ui->label->setText("Lambda Function"); // Note that the ui change command below will no longer work because of this line here
    });
}

// Lambda functions
//=================================================
typeName functionName = [VariablesWeCanCapture](ParameterList)-> returnValue {function body}(parametersForImmediateExecution);


// Lambda function executed immediately
    [](){
            cout << "Hello World!" << endl;
	}();

    [](int a, int b){
      std::cout << "Sum of a and b is: " << a + b << std::endl;
    }(7,3);

// Define a lambda that returns something
    int sum = [](int a, int b)->int{
        return a + b;
    }(7,3);

// Capturing by value
    int c = 42;
    auto captureValue = [c](){
        cout << "The value of C is " << c << endl;
    };
    for(int i = 1 ; i < 5; i++){
        cout << "Outer value of C is: " << c << endl;;
        captureValue();
        c++;
    }

// Capturing by reference
        int c = 42;
        auto captureValue = [&c](){
            cout << "The value of C is " << c << endl;
        };
        for(int i = 1 ; i < 5; i++){
            cout << "Outer value of C is: " << c << endl;;
            captureValue();
            c++;
        }

// Capture everything by value
    int c = 42;
    int d = 55;
    auto captureValue = [=](){
        cout << "The value of C is " << c << endl;
        cout << "The value of D is " << d << endl;
    };
    for(int i = 1 ; i < 5; i++){
        cout << "Outer value of C is: " << c << endl;;
        captureValue();
        c++;
    }

// Capture everyting by reference
	int c = 42;
	int d = 55;
	auto captureValue = [&](){
		cout << "The value of C is " << c << endl;
		cout << "The value of D is " << d << endl;
	};
	for(int i = 1 ; i < 5; i++){
		cout << "Outer value of C is: " << c << endl;;
		captureValue();
		c++;
	}

// Adding a widget
//=================================================
#include "rockwidget.h"
#include <QLabel>
#include <QFont>
#include <QPushButton>
#include <QMessageBox>

// Constructor
RockWidget::RockWidget(QWidget *parent) : QWidget(parent){
    //setWindowTitle("Rock Widget Here");
    //QLabel * label = new QLabel("This is my label", this);

    // Add a styled widget and move it around
    QLabel * label1 = new QLabel(this);
    QFont serifFont("Times", 20, QFont::Bold);
    QPalette colorPalette;
    colorPalette.setColor(QPalette::Window, Qt::yellow);
    colorPalette.setColor(QPalette::WindowText, Qt::blue);

    label1->setText("My colored label.");
    label1->setAutoFillBackground(true);
    // (right, down) Y axis moves down when positive number, use negative to move up
    label1->move(50,50);
    label1->setFont(serifFont);
    label1->setPalette(colorPalette);

    QPushButton * button = new QPushButton(this);
    button->setText("Click me");
    button->setFont(serifFont);
    button->move(100,250);

    // Pass in object you want to capture the signal for (button)
    // Pass in the signal you want to capture (clicked())
    // Specify the object that is going to respond (this)
    // Specify the method that is going to be called
    connect(button, SIGNAL(clicked()), this, SLOT(buttonClicked()));
}

void RockWidget::buttonClicked()
{

    QMessageBox::information(this, "Message", "You clicked on my button");
}

QSize RockWidget::sizeHint() const
{
    return QSize(500,500);// Width and height
}

// Main Window demo
//=================================================
#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QPushButton>
#include <QDebug>
#include <QMenuBar>
#include <QStatusBar>
#include <QAction>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    // Add central Widget
    QPushButton * button = new QPushButton("Click me", this);
    setCentralWidget(button);

    // Declare Quit action
    QAction * quitAction = new QAction("Quit");
    connect(quitAction, &QAction::triggered, [=](){
        QApplication::quit();
    });

    // Add Menus
    QMenu * fileMenu = menuBar()->addMenu("File");
    fileMenu->addAction(quitAction);
    menuBar()->addMenu("Edit");
    menuBar()->addMenu("Window");
    menuBar()->addMenu("Settings");
    menuBar()->addMenu("Help");

    // Add status bar message
    statusBar()->showMessage("Uploading File...", 3000);
    //statusBar()->clearMessage();

}

MainWindow::~MainWindow()
{
    delete ui;
}

QSize MainWindow::sizeHint() const
{
    return QSize(800,500);
}

// Message boxes
//=================================================
#include "widget.h"
#include "ui_widget.h"
#include <QPushButton>
#include <QMessageBox>
#include <QDebug>
#include <iostream>
#include <string>

Widget::Widget(QWidget *parent)
    : QWidget(parent)
    , ui(new Ui::Widget)
{

    ui->setupUi(this);
    QPushButton * button = new QPushButton(this);
    button->setText("Click me");
    button->move(200,200);
    // Connect the button to a message box with a lambda function
    connect(button, &QPushButton::clicked,[=](){

        
	// Set up the message box (hard way)
	QMessageBox message;
	message.setMinimumSize(300,200);
	message.setWindowTitle("Message Title");
	message.setText("Something happened");
	message.setInformativeText("Do you want to do something about it?");
	message.setIcon(QMessageBox::Critical);
	message.setStandardButtons(QMessageBox::Ok | QMessageBox::Cancel);
	message.setDefaultButton(QMessageBox::Cancel);
	int returnValue = message.exec();
        

	//Critical message
	int returnValue = QMessageBox::critical(this, "Message Title", "Something happened. Do you want to do something about it?", QMessageBox::Ok | QMessageBox::Cancel);
	

	// Informational message
	int returnValue = QMessageBox::information(this, "Message Title", "Something Happened.", QMessageBox::Ok | QMessageBox::Cancel);
	
	// Question message
	int returnValue = QMessageBox::question(this, "Message Title", "Somethign happened", QMessageBox::Ok | QMessageBox::Cancel);
	
	// Warning message
	int returnValue = QMessageBox::warning(this, "Message Title", "Something Happened", QMessageBox::Ok | QMessageBox::Cancel);


	if (returnValue == QMessageBox::Ok){
		qDebug() << "User clicked on Ok";
	}
	if (returnValue == QMessageBox::Cancel){
		qDebug() << "User clicked on Cancel";
	}

    });

}

Widget::~Widget()
{
    delete ui;
}


// Push buttons
//=================================================
#include "widget.h"
#include "ui_widget.h"
#include <QPushButton>
#include <QDebug>

Widget::Widget(QWidget *parent)
    : QWidget(parent)
    , ui(new Ui::Widget)
{
    ui->setupUi(this);


    QFont serifFont("Times", 10, QFont::Bold);
    QPushButton * button = new QPushButton("Button1", this);
    button->setFont(serifFont);
    button->setMinimumSize(200,100);
    connect(button, &QPushButton::clicked, [=](){
       qDebug() << "Button clicked";
    });

    QPushButton * button2 = new QPushButton("Button2", this);
    button2->setFont(serifFont);
    button2->setMinimumSize(200,100);
    button2->move(205, 0);
    connect(button2, &QPushButton::pressed, [=](){
       qDebug() << "Button Pressed";
    });

    connect(button2, &QPushButton::released, [=](){
       qDebug() << "Button Released";
    });


}

Widget::~Widget()
{
    delete ui;
}

// QLine Edit
//=================================================
#include "widget.h"
#include "ui_widget.h"
#include <QPushButton>
#include <QLabel>
#include <QLineEdit>
#include <QDebug>

Widget::Widget(QWidget *parent)
    : QWidget(parent)
    , ui(new Ui::Widget)
{
    ui->setupUi(this);

    // First name
    QLabel * firstNameLabel = new QLabel("First Name", this);
    firstNameLabel->setMinimumSize(70,50);
    firstNameLabel->move(10,10);

    QLineEdit * firstNameLineEdit = new QLineEdit(this);
    firstNameLineEdit->setMinimumSize(200,50);
    firstNameLineEdit->move(100,10);

    // Last name
    QLabel * lastNameLabel = new QLabel("Last Name", this);
    lastNameLabel->setMinimumSize(70,50);
    lastNameLabel->move(10,70);

    QLineEdit * lastNameLineEdit = new QLineEdit(this);
    lastNameLineEdit->setMinimumSize(200,50);
    lastNameLineEdit->move(100,70);

    // City
    QLabel * cityNameLabel = new QLabel("City", this);
    cityNameLabel->setMinimumSize(70,50);
    cityNameLabel->move(10,130);

    QLineEdit * cityNameLineEdit = new QLineEdit(this);
    cityNameLineEdit->setMinimumSize(200,50);
    cityNameLineEdit->move(100,130);

    // Define a button
    QFont buttonFont("Times", 20, QFont::Bold);
    QPushButton * button = new QPushButton("Grab Data!", this);
    button->setFont(buttonFont);
    button->move(80,190);

    connect(button, &QPushButton::clicked, [=](){
       QString firstName = firstNameLineEdit->text();
       QString lastName = lastNameLineEdit->text();
       QString city = cityNameLineEdit->text();



       if(!firstName.isEmpty() && !lastName.isEmpty() && !city.isEmpty()){
           qDebug() << firstName << lastName << city;
       } else {
           qDebug() << "Fill the field";
       }
    });

    // Cursor Position Changed
       connect(firstNameLineEdit, &QLineEdit::cursorPositionChanged, [=](){
           qDebug() << "The current cursor position is: " << firstNameLineEdit->cursorPosition();
       });

    // Editing finished - emits when user clicks enter or the line edit loses focus
       connect(firstNameLineEdit, &QLineEdit::editingFinished, [=](){
           qDebug() << "Editing Finished ";
       });

    // Return pressed
      connect(firstNameLineEdit, &QLineEdit::returnPressed, [=](){
          qDebug() << "Return pressed ";
      });

    // Selection changed - selects a subset of the text
      connect(firstNameLineEdit, &QLineEdit::selectionChanged, [=](){
          qDebug() << "Selection changed ";
      });

   // Text changed
      connect(firstNameLineEdit, &QLineEdit::textChanged, [=](){
          qDebug() << "Selection changed to: " << firstNameLineEdit->text();
      });

    // Text edited
       connect(firstNameLineEdit, &QLineEdit::textEdited, [=](){
           qDebug() << "Text edited to: " << firstNameLineEdit->text();
       });

	// Change text in qLineEdit programattically
		lastNameLineEdit->setText("Say your last name");

    // Hint text
       firstNameLineEdit->setPlaceholderText("First name here");
       lastNameLineEdit->setPlaceholderText("Last name here");
       cityNameLineEdit->setPlaceholderText("City name here");
}

Widget::~Widget()
{
    delete ui;
}

// QTextEdit 
//=================================================
#include "widget.h"
#include "ui_widget.h"
#include <QTextEdit>
#include <QLabel>
#include <QDebug>
#include <QPushButton>


Widget::Widget(QWidget *parent)
    : QWidget(parent)
    , ui(new Ui::Widget)
{
    ui->setupUi(this);

    // Adjust the window's attributes
    setFixedSize(400, 400);
    setupScreen();
}

Widget::~Widget()
{
    delete ui;
}

void Widget::setupScreen()
{
    QFont labelFont("Times", 10, QFont::Bold);
    QLabel * mLabel = new QLabel("This is my text", this);
    mLabel->setFont(labelFont);
    mLabel->move(100,25);

    QTextEdit * textEdit = new QTextEdit(this);
    textEdit->move(70,55);

    // Capture an emitted signal
    connect(textEdit, &QTextEdit::textChanged, [=](){
        qDebug() << "Text Changed";
    });

    //copy cut and paste
    QPushButton * copyButton = new QPushButton("Copy", this);
    copyButton->setMinimumSize(50,25);
    copyButton->move(10,250);
    connect(copyButton, &QPushButton::clicked, [=](){
        textEdit->copy();
    });

    QPushButton * cutButton = new QPushButton("Cut", this);
    cutButton->setMinimumSize(50,25);
    cutButton->move(110,250);
    connect(cutButton, &QPushButton::clicked, [=](){
        textEdit->cut();
    });

    QPushButton * pasteButton = new QPushButton("Paste", this);
    pasteButton->setMinimumSize(50,25);
    pasteButton->move(210,250);
    connect(pasteButton, &QPushButton::clicked, [=](){
        textEdit->paste();
    });

    //Undo and redo
    QPushButton * undoButton = new QPushButton("Undo", this);
    undoButton->setMinimumSize(50,25);
    undoButton->move(10, 280);
    connect(undoButton, &QPushButton::clicked, [=](){
        textEdit->undo();
    });

    QPushButton * redoButton = new QPushButton("Redo", this);
    redoButton->setMinimumSize(50,25);
    redoButton->move(110, 280);
    connect(redoButton, &QPushButton::clicked, [=](){
        textEdit->redo();
    });

    //Set text and html to the text edit
    QPushButton * plainTextButton = new QPushButton("Plain text", this);
    plainTextButton->setMinimumSize(100,25);
    plainTextButton->move(10,310);
    connect(plainTextButton, &QPushButton::clicked, [=](){
        textEdit->setPlainText("stuff");
    });

    QPushButton * htmlButton = new QPushButton("Html Text", this);
    htmlButton->setMinimumSize(100,25);
    htmlButton->move(110, 310);
    connect(htmlButton, &QPushButton::clicked, [=](){
        textEdit->setHtml("<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>");
    });

    // Grab text and html
    QPushButton * grabTextButton = new QPushButton("Grab text", this);
    grabTextButton->setMinimumSize(100,25);
    grabTextButton->move(10,340);
    connect(grabTextButton, &QPushButton::clicked, [=](){
       qDebug() << "The plain text inside the text edit is: " << textEdit->toPlainText();
    });

    QPushButton * grabHtmlButton = new QPushButton("Grab html", this);
    grabHtmlButton->setMinimumSize(100,25);
    grabHtmlButton->move(110,340);
    connect(grabHtmlButton, &QPushButton::clicked, [=](){
        qDebug() << "The html is: " << textEdit->toHtml();
    });


}
