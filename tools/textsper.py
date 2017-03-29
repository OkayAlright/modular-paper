"""
Does cool shit.
"""
import argparse

def parseArgs():
    """
    Handles command line args
    and returns a filename to open.
    """
    parser = argparse.ArgumentParser()
    parser.add_argument("textFile",help="The .combtxt file to parse.")
    args =  parser.parse_args()
    return args.textFile

def seperateAndSortText(sourceText):
    """
    Seperates and sorts static and optional text
    as defined by the combtxt spec into two lists.
    """
    normal_text = []
    options = []
    in_option_group = False
    list_of_sections = sourceText.split("#")
    for section in list_of_sections:
        if ("`" in section.split()):
            if in_option_group:
                options[-1].append(section)
            else:
                in_option_group = True
                options.append([section])
        else:
            if in_option_group:
                in_option_group = False
            normal_text.append(section)
    return normal_text,options


def optionsToJS(options):
    """
    Turns a list of lists of optional text
    into a group of javascript lists as a 
    single string.
    """
    var_str = ""
    num = 1
    for group in options:
        var_str += "var switch{} = [".format(str(num))
        num += 1
        for item in group:
            var_str += '"'+(item.replace("`","").replace("\n","")) + '",'
        var_str = var_str[:-1] #shave off trailing comma
        var_str += "]; \n"
    return var_str

def formatHTML(content):
    """
    takes a list containing sections of static
    text followed by a list of lists of optional
    text. 

    returns a string that is the two lists concatinated
    where, for each optional text list, the first item is 
    chosen and surrounded by a <span> tag with it's id set
    to "switch#" where # is the number in which it occures.
    """
    num = 1
    html_content = ""
    for i in range(len(content[0])):
        html_content += content[0][i]
        if i <= (len(content[1])-1):
            html_content += '<span id="switch{}">'.format(str(num))\
                            +content[1][i][0].replace('`','')+"</span>"
            num += 1
    return html_content



filename = parseArgs()
file = open(filename,"r").read()
content = seperateAndSortText(file)
js_content = optionsToJS(content[1])
html_text = formatHTML(content)

js_function = """
function chooseFromList(list_of_choices){
    return list_of_choices[Math.floor(Math.random() * list_of_choices.length)];
}
function get_and_switch(list_of_choices,id_tag){
    if(Math.random() > 0.9){
        document.getElementById(id_tag).innerHTML = chooseFromList(list_of_choices)
    }
}


setInterval(function(){get_and_switch(switch1,"switch1")},500)
"""

jsfile = open("switch.js","w")
htmlcontentfile = open(filename.split(".")[0]+".content","w")

jsfile.write(js_content+"\n\n"+js_function)
htmlcontentfile.write(html_text)
