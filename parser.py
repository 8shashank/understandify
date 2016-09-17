from user_agents import parse
import sys

arguments = sys.argv
if len(arguments)>1:
    parseUA(arguments[1])
else
    raise Exception("Did not receive user agent")
    
def parseUA(ua_string):   
    user_agent = parse(ua_string)
    # Viewing a pretty string version
    print str(user_agent)